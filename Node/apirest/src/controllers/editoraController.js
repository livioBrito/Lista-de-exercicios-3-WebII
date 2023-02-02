import Editora from "../models/editora.js";

const listarEditoras = (req, res) => {
  Editora.find({})
    .then(editoras => res.json(editoras))
    .catch(err => res.status(400).json(err));
};

const cadastrarEditora = (req, res) => {
  const novaEditora = new Editora(req.body);
  novaEditora
    .save()
    .then(editora => res.json(editora))
    .catch(err => res.status(400).json(err));
};

const atualizarEditora = (req, res) => {
  Editora.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(editora => res.json(editora))
    .catch(err => res.status(400).json(err));
};

const listarEditoraPorId = (req, res) => {
  Editora.findById(req.params.id)
    .then(editora => res.json(editora))
    .catch(err => res.status(400).json(err));
};

const excluirEditora = (req, res) => {
  Editora.findByIdAndDelete(req.params.id)
    .then(editora => res.json(editora))
    .catch(err => res.status(400).json(err));
};

export default {
  listarEditoras,
  cadastrarEditora,
  atualizarEditora,
  listarEditoraPorId,
  excluirEditora
};
