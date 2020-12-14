// Pegamos la funcion al module de node
exports.renderAuth = (require, response) => {
  //response.sendFile(process.cwd() + '/views/auth.html');// muestra vista auth
  response.render("auth.ejs");
}