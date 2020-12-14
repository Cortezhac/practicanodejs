export const renderContact = (request, response) => {
  //response.sendFile(process.cwd() + "/views/contact.html");
  response.render('contact.ejs', {path : "Contact"});
}

export default {renderContact};