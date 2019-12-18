
const Sobremesa = require("../Models/sobremesa");
module.exports = {

    
    async store(req, res){
        const sobremesa  = await Sobremesa.create(req.body);
        return res.json(sobremesa);       
    },
    
    async list(req, res) {
        const sobremesa = await Sobremesa.find({ });
        return res.json(sobremesa);
    },

    
    async update(req, res) {
        const sobremesa = await Sobremesa.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(sobremesa);
    },

    
    async destroy(req,res){        
        await Sobremesa.deleteOne({ _id: req.params.id });
    
        return res.json({ message: "Exclusão efetuada com sucesso!!!" });
    }
}