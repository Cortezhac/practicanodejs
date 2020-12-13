const express = require("express");
const homeController = require("../controllers/home");

const home = express.Router(); //obentemos el router 

home.get("/", homeController.renderHome);

module.exports = home;