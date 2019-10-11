import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('Database connection successful'));
mongoose.connection.on('error', () => console.log('Database connection failed'));
