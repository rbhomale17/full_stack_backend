const express = require("express");
const { Connection } = require("./config/db");
const { userRouter } = require("./routes/users.route");
require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("Wlecome to Home page. Prathamesh")
// });

app.use('/users',userRouter);

app.listen(Number(process.env.port),async()=>{
    try {
        await Connection;
        console.log("Conected to DB");
    } catch (error) {
        console.log(error);
        console.log("Failed to connected DB");
    }
    console.log(`server is started at port ${Number(process.env.port)}`);
});