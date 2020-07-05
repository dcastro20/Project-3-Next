/* eslint-disable func-names */
/* eslint-disable no-console */
import { session, promisifyStore, expressSession } from 'next-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(expressSession);

console.log('middlewares/session');

export default function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    store: promisifyStore(mongoStore),
  })(req, res, next);
}
