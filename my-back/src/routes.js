//Importações necessária para o CRUDE (user e post)
const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/userController");
const SessionController = require("./Controllers/sessionController");
const SobremesaController = require("./Controllers/sobremesaController");
const ComidaController = require("./Controllers/comidaController");
const BebidaController = require("./Controllers/bebidaController");

//cadastrar
routes.post("/cadusuario", UserController.store);
routes.post("/cadcomida", ComidaController.store);
routes.post("/cadbebida", BebidaController.store);
routes.post('/cadsession', SessionController.store);
routes.post('/cadsobremesa', SobremesaController.store);

//listar
routes.get("/listausuario", UserController.list);
routes.get("/listacomida", ComidaController.list)
routes.get("/listabebida", BebidaController.list)
routes.get("/listasobremesa", SobremesaController.list)


//Exportando as rotas
module.exports = routes;