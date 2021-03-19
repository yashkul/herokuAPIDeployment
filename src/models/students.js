const mongoose = require("mongoose");
const validator = require("validator");
//Schema of Collection
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email : {
        type:String,
        required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type:Number,
        required:true,
        min:10,
        unique:true
    },
    address : {
        type:String,
        required:true
    }

})
//Creating Model i.e Collection 
const Student = new mongoose.model("Student",studentSchema);//Name of Collection is saved in Plural in database
//exporting the model to create access to routes,application
module.exports = Student;