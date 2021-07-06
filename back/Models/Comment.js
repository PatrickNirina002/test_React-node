

const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    id2: String,
    //lien:String,
    nom:String,
    commentaire:String
    //status: String, 
  })
);

module.exports = Comment; 