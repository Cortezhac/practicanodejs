const express = require("express");
const controller = require("../controllers/auth");

const authRouter = express.Router();
/**obtienen la ruta y ejecuta el callback del controlador auth */
authRouter.get('/', controller.renderAuth);

module.exports = authRouter;