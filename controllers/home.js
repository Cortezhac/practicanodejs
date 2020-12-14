export const renderHome = (request, response) =>{
  //response.sendFile(process.cwd()+ "/views/index.html");sin motor de renderizado
  response.render("index.ejs");
}

export default {renderHome};

/**
 * Antes utiliza la variable __dirname pero esta la ruta del archivo en donde se esta ejecutando en este caso 
 * E:\Admin\Documents\Practicas cursos\JavaScript\NodeJs\proyectoNodejs\controllers\ 
 * por lo que no me sirve pues el archivo esta en 
 * E:\Admin\Documents\Practicas cursos\JavaScript\NodeJs\proyectoNodejs\views\index.html
 * por ende se cambio a process.cwd() que genera la ruta correcta
 */