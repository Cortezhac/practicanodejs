import express from "express";
import controller from "../controllers/auth";

const authRouter = express.Router();
/**obtienen la ruta y ejecuta el callback del controlador auth */
authRouter.get('/', controller.renderAuth);

export default authRouter;