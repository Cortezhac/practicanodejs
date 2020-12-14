export const renderAbout = (request, response) =>{
  //response.sendFile(process.cwd() + "/views/about.html");
  response.render("about.ejs");
}

export default renderAbout;