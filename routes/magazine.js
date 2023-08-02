const express = require ('express');
const Magazine = require('../models/magazine');
const magazineRouter = express.Router();




//add magazine
magazineRouter.post("/add", async (req, res) => {
    try {
        let newmagazine = new Magazine (req.body);
        let result = await newmagazine.save();
        res.send({magazine : result, msg : "magazine is added"})
    } catch (error) {
        console.log(error)
    }
})


//get Magazine
magazineRouter.get("/", async (req, res) => {
    try {
        let result = await Magazine.find();
        res.send({magazine : result, msg : "All Magazine's are displayed"})
    } catch (error) {
        console.log(error)
    }
})

//get Magazine by id
magazineRouter.get("/:id", async (req, res) => {
    try {
        let result = await Magazine.findById(req.params.id);
        res.send({magazine : result, msg : "Magazine is displayed"})
    } catch (error) {
        console.log(error)
    }
})



//delete Magazine
magazineRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Magazine.findByIdAndDelete(req.params.id);
        res.send({msg : "Magazine is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update Magazine
magazineRouter.put("/:id", async (req, res) => {
    try {
        let result = await Magazine.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({magazine : result,msg : "Magazine is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = magazineRouter;