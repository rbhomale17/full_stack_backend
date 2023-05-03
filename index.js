const express = require("express");
const { Connection } = require("./backend/config/db");
const { userRouter } = require("./backend/routes/users.route");
require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("Wlecome to Home page. Prathamesh")
// });
// console.log(Number(process.env.port),typeof(Number(process.env.port)));
app.use('/users',userRouter);

const getconnection = async ()=>{
   try {
     await Connection;
     console.log("Connected To DB");
   } catch (error) {
    console.log(error);
    console.log("Failed To Connect DB");
   };

   console.log("reach to server 1")
   app.listen(4500,async()=>{
    console.log("reach to server 2")
    console.log(`server is started at port 4500`);
});
};

function start(){
    getconnection();
};
start();
