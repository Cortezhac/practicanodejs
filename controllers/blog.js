import {post} from '../models/posts.js';
export const renderBlog = (resquest, response) => {
  //response.sendFile(process.cwd() + "/views/blog.html");
  response.render("blog.ejs", {path : "Blog", post : post});
}

export default { renderBlog };