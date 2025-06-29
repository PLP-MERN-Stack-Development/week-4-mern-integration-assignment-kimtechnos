// routes/posts.js
import express from "express";
import {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// RESTful routes for posts
router.route("/").get(getAllPosts).post(protect, createPost);

router
  .route("/:slug")
  .get(getSinglePost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

export default router;
