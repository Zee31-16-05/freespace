const express = require('express');
const app = express();
const router = express.Router();

// app.use(bodyParser.json());
app.use(express.json())
let studentOjb

module.exports.postStudent = (req,res)=>{
    
    console.log("bodyy",req.body);
    
     studentOjb = {
        "name": req.body.name,
        "sirname": req.body.sirname,
        "age": req.body.age,
        "gender": req.body.gender
    }
    res.send(studentOjb);
}

module.exports.getStudent = (req, res) => {

    const getStudentResponse = studentOjb
    console.log("my getttttttttttttttt response: ", getStudentResponse)
    res.send(getStudentResponse)
}



