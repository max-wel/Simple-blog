import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogPostSchema = mongoose.Schema({
  content: String,
  edited: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
