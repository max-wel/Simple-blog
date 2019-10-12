import passport from 'passport';
import google from 'passport-google-oauth';
import dotenv from 'dotenv';

dotenv.config();

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/v1/auth/google/callback'
};

passport.use(
  new google.OAuth2Strategy(
    googleConfig,
    (accessToken, refreshToken, profile, done) => done(null, profile)
  )
);
