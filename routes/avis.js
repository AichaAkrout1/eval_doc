const express = require ('express');
const Avis = require('../models/avis');
const avisRouter = express.Router();




//add avis
avisRouter.post("/add", async (req, res) => {
    try {
        let newavis = new Avis (req.body);
        let result = await newavis.save();
        res.send({avis : result, msg : "avis is added"})
    } catch (error) {
        console.log(error)
    }
})


//get avis
avisRouter.get("/", async (req, res) => {
    try {
        let result = await Avis.find();
        res.send({avis : result, msg : "All avis's are displayed"})
    } catch (error) {
        console.log(error)
    }
})

//get avis by id
avisRouter.get("/:id", async (req, res) => {
    try {
        let result = await Avis.findById(req.params.id);
        res.send({avis : result, msg : "avis is displayed"})
    } catch (error) {
        console.log(error)
    }
})



//delete avis
avisRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Avis.findByIdAndDelete(req.params.id);
        res.send({msg : "avis is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update avis
avisRouter.put("/:id", async (req, res) => {
    try {
        let result = await Avis.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({avis : result,msg : "avis is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = avisRouter;