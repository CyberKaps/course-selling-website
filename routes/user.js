const { Router } = require("express")
const userRouter = Router();
const { userModel, purchaseModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

    userRouter.post('/signup',async (req,res)=>{
        try{
            const { email, password, firstName, lastName } = req.body; //TODO:  adding zod validations
        //TODO: hash the password with bcrypt
        

        //TODO: put inside a try catch block
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        res.json({
            message: "singnup succeeded"
        })
        } catch(e){
            res.status(400).json({
                message: "Server ki ma ka bhosda"
            })
        }
    })
    
    userRouter.post('/signin',async (req,res)=>{
        const { email, password } = req.body;

        //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
        const user = await userModel.findOne({
            email: email,
            password: password
        });

        if(user){
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);

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
    
   userRouter.get('/purchases', userMiddleware, async (req,res)=>{

        const userId = req.userId;

        const purchases = await purchaseModel.find({
            userId
        });

        const courseData = await courseModel.find({
            _id: { $in: purchases.map(x => x.courseId )}
        })
        res.json({
            purchases,
            courseData
        })
    })


module.exports = {
    userRouter: userRouter
}