 
const Comida = require("../Models/comida");
module.exports = {
 
    async store(req, res){
        const comida  = await Comida.create(req.body);
        return res.json(comida);       
    }, 
    async list(req, res) {
        const comida = await Comida.find().populate('user');
        return res.json(comida);
    },
 
 
    async update(req, res) {
        const comida = await Comida.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(comida);
    }, 
    async destroy(req,res){        
        await Comida.deleteOne({ _id: req.params.id });
        
        return res.json({ message: "Exclusão da comida com sucesso!!!" });
    }
}