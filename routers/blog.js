import express from "express";
import blogController from "../controllers/blog.js";

const blog = express.Router();

blog.get("/", blogController.renderBlog);

export default  blog;