const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userRouter = express.Router();
const {registerRules, loginRules, validation} = require("../middleware/validator");
const isAuth = require("../middleware/passport");


// register

userRouter.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const newUser = new User({ name, lastname, email, password });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(newUser.password, genSalt);
    // console.log(hashedPassword);
    newUser.password = hashedPassword;
    // generate token
    const newUsertoken = await newUser.save();
    const payload = {
      _id: newUsertoken._id,
      name: newUsertoken.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    //save the user
    await newUser.save();
    res.status(200).send({ newUsertoken, msg : "User is saved", token:`Bearer ${token}` });
  } catch (error) {
    res.status(500).send("can not save the user");
  }
});

// login
userRouter.post("/login",loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    // if the email not exist
    if (!searchedUser) return res.status(400).send({ msg: "bad Credential" });
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) return res.send({ msg: "bad Credential" });
    // create token
    const payload = {
      _id: searchedUser._id,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    //send the user
    res.status(200).send({ user: searchedUser, msg: "success", token:`Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
  }
});


// Get current user
userRouter.get('/current', isAuth(), (req, res) => 
   res.status(200).send({user:req.user})
)

//get user
userRouter.get("/", async (req, res) => {
    try {
        let result = await User.find();
        res.send({users : result, msg : "All users"})
    } catch (error) {
        console.log(error)
    }
})

//get user by id
userRouter.get("/:id", async (req, res) => {
    try {
        let result = await User.findById(req.params.id);
        res.send({user : result, msg : "One user"})
    } catch (error) {
        console.log(error)
    }
})



//delete user
userRouter.delete("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
        res.send({msg : "user is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update user
userRouter.put("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({USER : result,msg : "USER is updated"})
    } catch (error) {
        console.log(error)
    }
})
// Delete all user 
userRouter.delete('/delete', async (req, res) => {

    try {
        const result= await User.findByIdAndDelete() 
        
        
        res.send({  message: ' users are Deleted' })

        
    } catch (error) {
        console.log(error)
    }

}
)
module.exports = userRouter;
