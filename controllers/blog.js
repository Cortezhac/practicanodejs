exports.renderBlog = (resquest, response) => {
  //response.sendFile(process.cwd() + "/views/blog.html");
  response.render("blog.ejs");
}