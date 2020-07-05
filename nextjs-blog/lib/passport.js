/* eslint-disable no-console */
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';

passport.serializeUser((user, done) => {
  console.log('serializeUser');
  done(null, user._id);
});

// passport#160
passport.deserializeUser((req, id, done) => {
  console.log('deserializeUser');
  req.db
    .collection('users')
    .findOne({ _id: id })
    .then((user) => done(null, user));
});

console.log('passport.use');
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      console.log('passport.use - email, password', email, password);
      const user = await req.db.collection('users').findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) done(null, user);
      else done(null, false, { message: 'Email or password is incorrect' });
    },
  ),
);

export default passport;
