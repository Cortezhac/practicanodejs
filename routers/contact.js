import express from "express";
import contactController from "../controllers/contact";

const contact = express.Router();

contact.get("/", contactController.renderContact);

export default contact;