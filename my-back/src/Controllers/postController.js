 
const Post = require("../Models/post");
module.exports = {
 
    async store(req, res){
        const post  = await Post.create(req.body);
        return res.json(post);       
    }, 
    async index(req, res) {
        const post = await Post.findOne({ _id: req.params.id });
        return res.json(post);
    }, 
    async update(req, res) {
        const post = await Post.findByIdAndUpdate(  
            req.params.id,
            req.body,            
            { new: true }
        );
        return res.json(post);
    }, 
    async destroy(req,res){        
        await Post.deleteOne({ _id: req.params.id });
  
        return res.json({ message: "Exclusão de post realizada com sucesso!" });
    }
}