const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({
    image:{type: String, },
    name:{type: String, },
    lastname:{type: String, },
    email:{type: String, },
    password:{type: String, },
    isAdmin:{type: Boolean, default:false},
  });


  const User = mongoose.model('User', userSchema);


  module.exports=User;