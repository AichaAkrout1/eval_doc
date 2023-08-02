const mongoose = require("mongoose");
const schema = mongoose.Schema;


const avisSchema = new schema({
    image:{type: String, },
    nameUser:{type: String, },
    IDdoctor:{type : String,},
    nameDoctor:{type : String},
    message:{type : String},
    date:{type : String},
  });
  const Avis = mongoose.model('Avis', avisSchema);


  module.exports=Avis;