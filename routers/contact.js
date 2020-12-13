const express = require("express");
const contactController = require("../controllers/contact");

const contact = express.Router();

contact.get("/", contactController.renderContact);

module.exports = contact;