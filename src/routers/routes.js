const express = require("express");
//creating router to acctually route the type of requests
const router = new express.Router();
// giving access of actual collection to fulfill the request
const Student = require("../models/students");
//Read
router.get("/students",async(req,res) =>{
    try {
        const studentList = await Student.find();
        res.send(studentList);
    } catch (error) {
        res.send(error);        
    }
})
//Create
router.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
})
//update
router.patch("/students/:id",async(req,res) =>{
    try {
        const _id= req.params.id;
       const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
           new:true
       });
       res.send(updateStudent);
        
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete

router.delete("/students/:id",async(req,res) =>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteStudent);
        } catch (error) {
        res.status(500).send(error);
    }
})

//exporting the router so that actuall application can have the access of it
module.exports = router;