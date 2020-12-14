exports.renderContact = (request, response) => {
  //response.sendFile(process.cwd() + "/views/contact.html");
  response.render('contact.ejs');
}