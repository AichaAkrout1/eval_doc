const express = require ('express');
const Doctor = require('../models/doctor');
const doctorRouter = express.Router();




//add doctor
doctorRouter.post("/add", async (req, res) => {
    try {
        let newdoctor = new Doctor (req.body);
        let result = await newdoctor.save();
        res.send({doctor : result, msg : "doctor is added"})
    } catch (error) {
        console.log(error)
    }
})


//get doctors
doctorRouter.get("/", async (req, res) => {
    try {
        let result = await Doctor.find();
        res.send({doctor : result, msg : "All doctors are displayed"})
    } catch (error) {
        console.log(error)
    }
})

//get doctor by id
doctorRouter.get("/:id", async (req, res) => {
    try {
        let result = await Doctor.findById(req.params.id);
        res.send({doctor : result, msg : "Doctor is displayed"})
    } catch (error) {
        console.log(error)
    }
})



//delete doctor
doctorRouter.delete("/:id", async (req, res) => {
    try {
        let result = await Doctor.findByIdAndDelete(req.params.id);
        res.send({msg : "Doctor is deleted"})
    } catch (error) {
        console.log(error)
    }
})


//update doctor
doctorRouter.put("/:id", async (req, res) => {
    try {
        let result = await Doctor.findByIdAndUpdate({_id: req.params.id},{$set:{...req.body}});
        res.send({doctor : result,msg : "Doctor is updated"})
    } catch (error) {
        console.log(error)
    }
})


module.exports = doctorRouter;