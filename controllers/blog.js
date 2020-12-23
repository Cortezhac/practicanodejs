import {Post} from '../models/posts.js';
export const renderBlog = (resquest, response) => {
  //response.sendFile(process.cwd() + "/views/blog.html");
  //responsnpme.render("blog.ejs", {path : "Blog", post : Post});
  Post.find((err, posts)=>{
    response.render("blog.ejs", {path : "Blog", posts: posts})
  })
}

export const post = (request, response) =>{
  const postRecibido = new Post({
    title: request.body.title,
    body: request.body.body
  });

  postRecibido.save((err) => {
    response.redirect("/blog");
  })
}

export default { renderBlog , post};