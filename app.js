import express from 'express';
import path from "path";

import dotenv from "dotenv";
import {connectDB} from "./config/db.js";

import authRouter from "./routers/auth.js";
import homeRouter from "./routers/home.js";
import contactRouter from "./routers/contact.js";
import blogRouter from "./routers/blog.js";
import abooutRouter from "./routers/about.js";

dotenv.config();
connectDB();

const server = express();
/** Load all resource on public [Carga los recuros de public} */
server.use(express.static(path.join(process.cwd(), "public")));
/**Cargamos el motor encargado de renderziar vista html dinanmicamente*/
server.set("views", path.join(process.cwd() + "/views"));// Asignamos el directorio en donde se encuentran las vistas
server.set('view engine', 'ejs');
/** when arrive this route, Cuando llege esta ruta se utilizar el router auth para obtener los recursos*/
server.use("/", homeRouter);
server.use("/blog", blogRouter);
server.use("/contact", contactRouter);
server.use("/about", abooutRouter)

server.listen(8080);// Servidor