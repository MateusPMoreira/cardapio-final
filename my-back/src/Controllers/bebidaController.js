
const Bebida = require("../Models/bebida");
module.exports = {


    async store(req, res){
        const bebida  = await Bebida.create(req.body);
        return res.json(bebida);       
    },

    async list(req, res) {
        const bebida = await Bebida.find({ });
        return res.json(bebida);
    },

    async update(req, res) {
        const bebida = await Bebida.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(bebida);
    },

 
    async destroy(req,res){        
        await Bebida.deleteOne({ _id: req.params.id });
 
        return res.json({ message: "Exclusão efetuada com sucesso!!!" });
    }
}