import express from 'express'
import { CLIENT_URL, PORT } from './config/ENV.js';
import dbConnect from './config/dbConnect.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin:CLIENT_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

await dbConnect()

app.get('/',(req,res)=>res.send("Hello"))

app.listen(PORT,(req,res)=>console.log("Server is running"))