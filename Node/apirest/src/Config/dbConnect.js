import mongoose from "mongoose"

mongoose.connect('mongodb+srv://admin:<123>@webii-disciplina.gjm35qz.mongodb.net/?retryWrites=true&w=majority')

let db = mongoose.connection

export default db