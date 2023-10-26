import express from 'express';
import { google, signin, signout, signup } from '../controllers/auth.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', verifyUser, signout);

export default router;