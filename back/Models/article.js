const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Voiture = new Schema({
  lien: {
      type: String
  },
//   commentaire:{
//       type:String
//   },
  commentaire: {type:Schema.Types.ObjectId,ref:'Comment' },
  date: {
      type: Date,
      default: Date.now
  }
});

const Voitu = mongoose.model('voiture', Voiture);
module.exports = Voitu;