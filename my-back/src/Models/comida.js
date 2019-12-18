 
const { Schema, model } = require("mongoose");
 
const  ComidaSchema = new Schema(
    
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
    },
    user:{
      type:Schema.Types.ObjectId,
      ref: "Usuarios"
    }
  }
);
 
module.exports = model("Comida", ComidaSchema);