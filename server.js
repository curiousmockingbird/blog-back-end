//Express server here:

import express from 'express';
import { MongoClient } from 'mongodb';
//import dotenv in order to use environmental variables
import {} from 'dotenv/config';

//creating an express app 
const app = express();
//express.json() is a built in middleware function in Express. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

app.get('/api/articles/:name/', async (req, res) => {
  //get the value of :name and use it to req (query) to MongoDB
  const { name } = req.params;
  //connect to MongoDB and make a query
  const uri = `mongodb+srv://${process.env.MONGO_URI}@cluster0.c9syyx6.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  //connect to client, so we need the async keyword at t he top level of function to deal with async code
  await client.connect();
  //reference to the data from the specific database ("blog") within our MongoDB cluster
  const db = client.db('blog')
  //query (READ) data from specific article by name
  const article = await db.collection('articles').findOne({name})
  //if article was found in the query, send response (as JSON data, to make sure the correct headers are set on the response) to client; else, display error message
  if(article){
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

//telling the server to listen on port 8000 and pass a callback to display message to check it is working
app.listen(8000, () =>{
  console.log('Server listening on port 8000')
})