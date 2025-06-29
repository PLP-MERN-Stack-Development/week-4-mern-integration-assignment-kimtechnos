import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(getCategories).post(createCategory);

router.route("/:slug").put(updateCategory).delete(deleteCategory);

export default router;
