import { Router } from 'express';
import Token from '../helpers/Token';
import blogPostController from '../controllers/blogPost.controller';
import validator from '../validation/validator';
import { editPostSchema, createPostSchema } from '../validation/blogPostSchema';

const {
  getAllPosts,
  createPost,
  getSpecificPost,
  editPost
} = blogPostController;

const router = Router();

router.get('/', getAllPosts);
router.post('/', Token.verifyToken, validator(createPostSchema), createPost);
router
  .route('/:id')
  .get(getSpecificPost)
  .patch(Token.verifyToken, validator(editPostSchema), editPost);

export default router;
