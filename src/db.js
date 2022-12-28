import { MongoClient } from 'mongodb';
import {} from 'dotenv/config';
let db;

async function connectToDb(cb){
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@blog-cluster.gvxybiz.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db('blog');
  cb();
}

export {
  db,
  connectToDb
}