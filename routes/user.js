const { Router } = require("express")
const userRouter = Router();

    userRouter.post('/signup',(req,res)=>{
        res.json({
            message: "singnup endpoint"
        })
    })
    
    userRouter.post('/signin',(req,res)=>{
        res.json({
            message: "signin endpoint"
        })
    })
    
    userRouter.get('/purchases',(req,res)=>{
        res.json({
            message: "my purchases"
        })
    })


module.exports = {
    userRouter: userRouter
}