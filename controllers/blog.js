export const renderBlog = (resquest, response) => {
  //response.sendFile(process.cwd() + "/views/blog.html");
  response.render("blog.ejs");
}

export default {renderBlog};