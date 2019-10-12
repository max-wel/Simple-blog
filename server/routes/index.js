import { Router } from 'express';
import authRoutes from './auth.routes';
import blogPostRoutes from './blogPost.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', blogPostRoutes);

export default router;
