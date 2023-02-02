import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  nome_fantasia: {
    type: String,
    required: true
  },
  razao_social: {
    type: String,
    required: true
  },
  endereco: {
    rua: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    }
  },
  telefone: {
    type: String,
    required: true
  }
});

const Editora = mongoose.model("Editora", editoraSchema);
export default Editora;
