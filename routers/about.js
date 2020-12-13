const express = require("express");
const aboutController = require("../controllers/about");

const about = express.Router();

about.get("/", aboutController.renderAbout)

module.exports = about;