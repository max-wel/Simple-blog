import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;
