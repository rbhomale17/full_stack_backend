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

app.use('/users',userRouter);
const getconnection = async ()=>{
   try {
     await Connection;
     console.log("Connected To DB");
   } catch (error) {
    console.log(error);
    console.log("Failed To Connect DB");
   };

   app.listen(Number(process.env.port),async()=>{
    console.log(`server is started at port ${Number(process.env.port)}`);
});
};

function start(){
    getconnection();
};
start();
