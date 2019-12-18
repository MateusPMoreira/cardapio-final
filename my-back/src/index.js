//Importaoes necessárias para a configuração do servidor
const express = require("express");
const mongoose = require("mongoose");
const index = express();
const cors = require("cors");

//Conexão do banco e servidor
mongoose.connect('mongodb://localhost:27017/prototipo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

index.use(express.json());
//Pegando as rotas do GRUD
const routes = require("./routes");
//Pasando para o servidor
index.use(routes);
index.use(cors());
index.use(express.json());
//Porta do localhost
index.listen(3333);