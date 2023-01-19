const express = require('express')
const router = express.Router()

const acutalTest = require('./testt')

router.post('/',(req,res)=>{
    return acutalTest.postStudent(req,res)
})

router.get('/',(req,res)=>{
    return acutalTest.getStudent(req,res)
})

module.exports = router
