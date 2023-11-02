import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import dbConfig from "./configs/dbConfig.js";

const app = express();


dotenv.config();


dbConfig();

app.use(morgan("dev"));
app.use("/api/backend",(req,res)=>{
    res.send("App is working properly");
});


app.listen(process.env.PORT,()=>console.log(`Server started at port ${process.env.PORT}`));