const express =  require('express');
const path = require("path");

const authRouter = require("./routers/auth");
const homeRouter = require("./routers/home");
const contactRouter = require("./routers/contact");
const blogRouter = require("./routers/blog");
const abooutRouter = require("./routers/about");

const server = express();
/** Load all resource on public [Carga los recuros de public} */
server.use(express.static(path.join(__dirname, "public")));
/**Cargamos el motor encargado de renderziar vista html dinanmicamente*/
server.set("views", path.join(__dirname + "/views"));
server.set('view engine', 'ejs');
/** when arrive this route, Cuando llege esta ruta se utilizar el router auth para obtener los recursos*/
server.use("/", homeRouter);
server.use("/blog", blogRouter);
server.use("/contact", contactRouter);
server.use("/about", abooutRouter)

server.listen(8080);// Servidor