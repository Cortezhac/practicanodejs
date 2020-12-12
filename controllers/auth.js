// Pegamos la funcion al module de node
exports.renderAuth = (require, response) => {
  response.send(__dirname + '/views/auth.html');// muestra vista auth
}