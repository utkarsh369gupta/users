// To generate mock data, use mockaroo


const express = require('express')
const logReqRes = require('./middleware/index.js')
const userRouter = require('./routes/user.js')
const { connectToMongoDb } = require('./connection.js')


const app = express()

connectToMongoDb('mongodb+srv://Utkarsh:Utkarsh@cluster0.f8wsqub.mongodb.net/Users').then(() =>
    console.log("MongoDB connected successfully!!!")
).catch((error) =>
    console.log(`MongoDB is encountering technical difficulties. \n${error}`))


app.use(logReqRes('log.txt'));


app.use("/api/Users", userRouter);

app.listen(3000, () => {
    console.log("Server is running at Port: 3000")
})
