const express = require('express')
const app = express();
app.use(express.json())
const testResponse = require('./route')
app.use('/student',testResponse)

const PORT = 3003
const hostname = 'localhost'



app.listen(PORT,()=>{
    console.log(`server listening on ${hostname}: ${PORT}`);
})