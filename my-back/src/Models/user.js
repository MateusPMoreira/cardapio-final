 
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../Config/auth");
 
const UsuariosSchema = new Schema(
   
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);
 
UsuariosSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});
 
UsuariosSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  }
};
 
UsuariosSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};
 
module.exports = model("Usuarios", UsuariosSchema);