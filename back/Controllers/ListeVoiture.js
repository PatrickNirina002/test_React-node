const Voiture = require("../Models/article");
exports.retrieve = (req, res) => {
    Voiture.find()
    .populate("commentaire")
    .then(list=>{
        res.json(
          list,
        );
    })
}