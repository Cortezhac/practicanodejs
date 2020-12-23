import express from "express";
import blogController from "../controllers/blog.js";
import bodyParse from "body-parser";

const blog = express.Router();

blog.use(bodyParse.urlencoded({extended: true}));

blog.get("/", blogController.renderBlog);
blog.post("/", blogController.post);

export default  blog;