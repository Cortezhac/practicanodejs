// Pegamos la funcion al module de node
export const renderAuth = (require, response) => {
  //response.sendFile(process.cwd() + '/views/auth.html');// muestra vista auth
  response.render("auth.ejs", {path : "auth"});
}

export default {renderAuth};