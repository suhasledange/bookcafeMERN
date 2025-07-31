import express from 'express'

const app = express();
const PORT = 3000

app.get('/',(req,res)=>res.send("Hello"))

app.listen(PORT,(req,res)=>console.log("Server is running"))