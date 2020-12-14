export const renderAbout = (request, response) =>{
  //response.sendFile(process.cwd() + "/views/about.html");
  response.render("about.ejs", {path : "About"});
}

export default {renderAbout};