const mongoose = require("mongoose");
const schema = mongoose.Schema;


const magazineSchema = new schema({
    image:{type: String, },
    title:{type: String, },
    subtitle:{type : String,},
    paragraph:{type : String},
    date:{type : String},
  });
  const Magazine = mongoose.model('Magazine', magazineSchema);


  module.exports=Magazine;