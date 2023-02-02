const livrosSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        Autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        Editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
        numeroPagina: {type: Number}
    }
)
livros.find().populate('Editora').exec((err, livros) => {
    console.log(livros)
})

