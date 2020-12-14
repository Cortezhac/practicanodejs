import express from "express";
import aboutController from "../controllers/about.js";

const about = express.Router();

about.get("/", aboutController.renderAbout)

export default about;