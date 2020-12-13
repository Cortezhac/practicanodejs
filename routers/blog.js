const express = require("express");
const blogController = require("../controllers/blog");

const blog = express.Router();

blog.get("/", blogController.renderBlog);

module.exports = blog;