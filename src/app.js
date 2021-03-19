const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");//connection with database
const Student = require("./models/students");  
const StudentRouter = require("./routers/routes");
app.use(express.json());// as some request have pure JSON form to access it we require express.json()
app.use(StudentRouter);//using Router
//server 
app.listen(port,() =>{
    console.log(`Connection set at ${port}`);
})
