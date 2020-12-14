import express from "express";
import contactController from "../controllers/contact.js";

const contact = express.Router();

contact.get("/", contactController.renderContact);

export default contact;