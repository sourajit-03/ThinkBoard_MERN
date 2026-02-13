import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

// const express = require("express");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001

//DB CALLING


//middleware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json())
app.use(rateLimiter);

// app.use((req,res,next) =>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//     next();
// })


app.use("/api/notes", notesRoutes);

// port is 5001
connectDB().then(() =>{
  app.listen(5001, () => {
  console.log(`Server is listening to port ${PORT}`);
});
});



// mongodb+srv://sourajitpaul7_db_user:ZChiGW6pPvgJ98TY@cluster0.ygvvlpm.mongodb.net/?appName=Cluster0clear