import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import './db/connection';

const app = express();
dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
