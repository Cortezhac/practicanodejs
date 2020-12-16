import { response } from "express";

export const renderContact = (request, response) => {
  //response.sendFile(process.cwd() + "/views/contact.html");
  response.render('contact.ejs', {path : "Contact"});
}
const contact = (request, response) => {
  response.send(request.body);
}

export default {renderContact, contact};