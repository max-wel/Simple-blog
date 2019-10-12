import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';
import router from './routes';
import './db/connection';
import BlogPost from './db/models/blogPost.model';

const app = express();
dotenv.config();

app.use(logger('dev'));
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
