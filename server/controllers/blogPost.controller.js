import BlogPost from '../db/models/blogPost.model';
import Response from '../helpers/Response';

const getAllPosts = async (req, res) => {
  const blogPosts = await BlogPost.find().exec();
  const response = new Response(true, 'Blog-posts fetched successfully', {
    blogPosts
  });
  return res.status(200).json(response);
};

const getSpecificPost = async (req, res) => {
  const blogPostId = req.params.id;
  const blogPost = await BlogPost.findOne({ _id: blogPostId }).exec();
  if (!blogPost) {
    const response = new Response(false, 'Blog-post does not exist');
    return res.status(404).json(response);
  }
  const response = new Response(true, 'Blog-post fetched successfully', {
    blogPost
  });
  return res.status(200).json(response);
};

const createPost = async (req, res) => {
  const { _id } = req.user;
  const newPost = { ...req.body, user: _id };
  const blogPost = await BlogPost.create(newPost);
  const response = new Response(true, 'Blog-post successfully created', {
    blogPost
  });
  return res.status(201).json(response);
};

const editPost = async (req, res) => {
  const { _id: userId } = req.user;
  const blogPostId = req.params.id;
  const { content } = req.body;
  const blogPost = await BlogPost.findOne({ _id: blogPostId }).exec();
  if (!blogPost) {
    const response = new Response(false, 'Blog-post does not exist');
    return res.status(404).json(response);
  }
  if (blogPost.user != userId) {
    const response = new Response(
      false,
      'Blog-post does not belong to this user'
    );
    return res.status(403).json(response);
  }
  const editedBlogPost = await BlogPost.findOneAndUpdate(
    { _id: blogPostId },
    { content, edited: true, updatedAt: new Date() },
    { new: true }
  ).exec();
  const response = new Response(true, 'Blog-post updated successfully', {
    blogPost: editedBlogPost
  });
  return res.status(200).json(response);
};

export default {
  getAllPosts,
  getSpecificPost,
  createPost,
  editPost
};
