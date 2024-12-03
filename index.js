const express = require('express');
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course");
const { adminRouter } = require('./routes/admin');

const app = express();


app.use("/api/v1/user", userRouter);
app.use("/api/vi/admin", adminRouter)
app.use("/api/v1/course", courseRouter);


async function main(){
    await mongoose.connect("mongodb+srv://cyberkaps:kalpesh@cluster0.dyv70o5.mongodb.net/course-selling-web")
    app.listen(3000)
    console.log("listening on port 3000")
}

main();