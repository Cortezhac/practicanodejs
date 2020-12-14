import express from "express";
import homeController from "../controllers/home.js";

const home = express.Router(); //obentemos el router 

home.get("/", homeController.renderHome);

export default home;