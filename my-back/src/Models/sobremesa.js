 
const { Schema, model } = require("mongoose");
 
const  SobremesaSchema = new Schema(
 
  {
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    }
  }
);
 
module.exports = model("Sobremesa", SobremesaSchema);