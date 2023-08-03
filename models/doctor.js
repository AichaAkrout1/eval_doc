const mongoose = require("mongoose");
const schema = mongoose.Schema;


const doctorSchema = new schema({
    image:{type: String, },
    name:{type: String, },
    lastname:{type: String, },
    email:{type: String, },
    NumberPhone:{type : Number,},
    speciality:{type : String},
    consultationPrice:{type : Number},
    adress:{type : String},
    region:{type : String},
    rating:{type : Number},
    isAdmin:{type: Boolean, default:false},
    isDoctor:{type: Boolean, default:true},

  });
  const Doctor = mongoose.model('Doctor', doctorSchema);


  module.exports=Doctor;