const { Router } = require("express")
const courseRouter =  Router();
const { courseModel } = require("../db")


    courseRouter.post('/purchase',(req,res)=>{
        res.json({
            message: "purchase a course"
        })
    })
    
    courseRouter.get('/preview',(req,res)=>{
        res.json({
            message: "all courses endpoint"
        })
    })


module.exports = {
    courseRouter: courseRouter
}