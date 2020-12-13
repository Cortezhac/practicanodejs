exports.renderBlog = (resquest, response) => {
  response.sendFile(process.cwd() + "/views/blog.html");
}