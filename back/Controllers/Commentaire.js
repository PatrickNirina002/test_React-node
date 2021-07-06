const Comment = require('../Models/Comment');
const Article = require('../Models/article');
exports.comment= (req,res)=>{
   Comment.findOne().then(commt=>{
       Article.findById(req.params._id).then(use=>{
                if(!use){
                    res.send("non")
                }
                else{
                    const comment = new Comment({
                        id2:use._id,
                        commentaire: req.body.commentaire, 
                    });
                    comment.save()
                        .then(commt => {
                            res.json(commt)
                            console.log(commt);
                        });               
                }
            });         
        }); 
}
exports.info = (req, res) => {
    Comment.find({ id2: req.params.id }, function (err, article) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else res.json( article );
    });
  };