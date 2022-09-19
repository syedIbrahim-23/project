import express from "express";
import { getPost,createPost } from "../controllers/posts.js";
const postRouter = express.Router();

postRouter.get('/',getPost);
postRouter.post('/',createPost)

export default postRouter;