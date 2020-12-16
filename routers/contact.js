import express from "express";
import contactController from "../controllers/contact.js";
import bodyParse from "body-parser";

const contact = express.Router();

contact.use(bodyParse.urlencoded({extended: true}));

contact.get("/", contactController.renderContact);
contact.post("/", contactController.contact);

export default contact;