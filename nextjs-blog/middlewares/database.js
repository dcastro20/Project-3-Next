/* eslint-disable no-console */
import { MongoClient } from 'mongodb';

// eslint-disable-next-line no-console
console.log('middlewares/database.js');
console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db) {
  console.log('setUpDb');
  db
    .collection('tokens')
    .createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 });
  db.collection('posts').createIndex({ createdAt: -1 });
  db.collection('users').createIndex({ email: 1 }, { unique: true });
}

export default async function database(req, res, next) {
  console.log('database');
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  await setUpDb(req.db);
  return next();
}
