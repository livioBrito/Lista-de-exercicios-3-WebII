import express  from "express"
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
import editoraRoutes from "./editoraRoutes.js"



const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({titulo: "Aula de node"});
    }) 

    app.use(
        express.json(),
        livros,
        autores,
        editoraRoutes
    )
}


export default routes
