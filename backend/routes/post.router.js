import express from 'express';

import {getPosts, post} from '../controllers/post.controller.js';

const router = express.Router();

router.post('/post', post);
router.get('/getpost', getPosts);

export default router;
