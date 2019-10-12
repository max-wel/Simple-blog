import { Router } from 'express';
import passport from 'passport';
import Auth from '../controllers/auth.controller';
import '../helpers/passportStrategy';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  Auth.socialLogin
);

export default router;
