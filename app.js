const express =  require('express');
const authRouter = require("./routers/auth");
const server = express();
/** Cuando llege esta ruta se utilizar el router auth para obtener los recursos*/
server.use("/auth", authRouter);


server.listen(8080);// Servidor