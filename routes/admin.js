const { Router } = require("express")
const adminRouter = Router();
const { adminModel } = require("../db")

const jwt = require("jsonwebtoken")
const JWT_ADMIN_PASSWORD = "admin"

adminRouter.post('/signup',async (req,res)=>{
    const { email, password, firstName, lastName } = req.body; //TODO:  adding zod validations
    //TODO: hash the password with bcrypt
    

    //TODO: put inside a try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "singnup succeeded"
    })
})

adminRouter.post('/signin',async (req,res)=>{
    const { email, password } = req.body;

    //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        //Do cookie logic

        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post('/course',(req,res)=>{
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.put('/course',(req,res)=>{
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.get('/course/bulk',(req,res)=>{
    res.json({
        message: "signin endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}