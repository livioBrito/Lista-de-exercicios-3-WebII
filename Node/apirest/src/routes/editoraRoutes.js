import express from "express";
import editoraController from "../controllers/editoraController.js";

const router = express.Router();

router
  .get("/editoras", editoraController.listarEditoras)
  .post("/editoras", editoraController.cadastrarEditora)
  .put("/editoras/:id", editoraController.atualizarEditora)
  .get("/editoras/:id", editoraController.listarEditoraPorId)
  .delete("/editoras/:id", editoraController.excluirEditora);

export default router;
