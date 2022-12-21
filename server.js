//import firebase admin to connect to Firebase admin SDK
import fs from 'fs';
import admin from 'firebase-admin';
//Express server here:
import express from 'express';
//import MongoClient from mongodb to connect to MongoDB
import { MongoClient } from 'mongodb';
//import dotenv in order to use environmental variables
import {} from 'dotenv/config';
import { db, connectToDb } from './db.js';


// Setting firebase admin package before initializing express app
const credentials = JSON.parse(fs.readFileSync('./firebaseCredentials.json'));
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

//creating an express app 
const app = express();
//express.json() is a built in middleware function in Express. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

//Adding middleware to these routes to check if the user is logged in
app.use(async (req, res, next) => {
//set headers to allow requests from client
  const { authtoken } = req.headers;

  if(authtoken){
    try {
      //verify the token sent from the client, and loads the user's credentials into req.user
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (error) {
      //if the token is invalid, send a 400 status code to the client
      return res.sendStatus(400);
    }
  }
  //This is a workaround to avoid the error "TypeError: Cannot set property 'user' of undefined"
  req.user = req.user || {};

  next();
})

//READ article data from server
app.get('/api/articles/:name/', async (req, res) => {
  //get the value of :name and use it to req (query) to MongoDB
  const { name } = req.params;
  const { uid } = req.user;
  //connect to MongoDB and make a query
  const uri = `mongodb+srv://${process.env.MONGO_URI}@cluster0.c9syyx6.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  //connect to client, so we need the async keyword at t he top level of function to deal with async code
  await client.connect();
  //reference to the data from the specific database ("blog") within our MongoDB cluster
  const db = client.db('blog')
  //query (READ) data from specific article by name
  const article = await db.collection('articles').findOne({name});
  //if article was found in the query, send response (as JSON data, to make sure the correct headers are set on the response) to client; else, display error message
  if(article){
  // Adding extra property to articles document to store the user ids of the users that have upVoted the article
    const upvoteIds = article.upvoteIds || [];
    article.canUpVote = uid && !upvoteIds.includes(uid);
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

//READ count of articles in database
app.get('/api/articles/', async (req, res) => {
  const count = await db.collection('articles').countDocuments();
  if(count){
  res.send(`${count}`);
  } else {
    res.send('Error');
  }
});

//READ only first 9 articles from database
app.get('/api/articles-list/', async (req, res) => {
  const { uid } = req.user;
  const articles = await db.collection('articles').find({}).limit(9).toArray();

  if(articles){
  const upvoteIds = articles.upvoteIds || [];
  articles.canUpVote = uid && !upvoteIds.includes(uid);
  res.json(articles);
  } else {
    res.send('Error');
  }
});

//READ only next 9 articles from database at a time starting from the 10th article, and keep that pattern
app.get('/api/articles-list/:count', async (req, res) => {
  const { count } = req.params;
  const { uid } = req.user;

  const articles = await db.collection('articles').find({}).skip(parseInt(count)).limit(9).toArray();

  if(articles){
  const upvoteIds = articles.upvoteIds || [];
  articles.canUpVote = uid && !upvoteIds.includes(uid);
  res.json(articles);
  } else {
    res.send('Error');
  }
});

//Adding middleware that will only apply to these two routes. If the user is not logged in, it will send a 401 status code to the client
app.use((req, res, next) => {
  if(req.user){
    next();
  } else {
    res.sendStatus(401);
  }
})

//UPDATE article data (upVotes prop)
app.put("/api/articles/:name/upVotes", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    const canUpVote = uid && !upvoteIds.includes(uid);

    if (canUpVote) {
      //use MongoDB $inc operator to increment by one the upVotes prop for the specific article
      await db
        .collection("articles")
        .updateOne(
          { name },
          { $inc: { upVotes: 1 }, $push: { upvoteIds: uid } }
        );
    }

    //query (READ) data from specific article by name
    const updatedArticle = await db.collection("articles").findOne({ name });
    //response with updated data
    res.json(updatedArticle);
  } else {
    res.send("This article doesn't exists");
  }
});

//CREATE(add) comments to database 
app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { text } = req.body;
  const { email } = req.user;

  await db.collection('articles').updateOne({ name }, {
    $push: { comments: { postedBy: email, text }}
  })
  const article = await db.collection('articles').findOne({name})

  //response with updated data
  if(article){
    res.json(article);
  } else {
    res.send('This article doesn\'t exists')
  }  
});


//telling the server to listen on port 8000 and pass a callback to display message to check it is working
connectToDb(() =>{
  app.listen(8000, () =>{
    console.log('Server listening on port 8000');
  })
})