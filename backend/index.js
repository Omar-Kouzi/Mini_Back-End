import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./config/db.js";
import programRoute from "./routes/program.route.js"


dotenv.config();
await db();

const port = process.env.PORT || 1113;


const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/image',express.static('image'))
app.use("/program", programRoute)

app.listen(port,
    () =>(
        console.log(`API is running on port: ${port}`)
    )
);