import mongoose from "mongoose";
import { MONGO_DB, MONGO_URI } from "./ENV.js";

const MONGOURI = `${MONGO_URI}/${MONGO_DB}`

const dbConnect = async () =>{
    try {
        const db = await mongoose.connect(MONGOURI)
        console.log("Mongodb connected : ",db.connection.host)
    } catch (error) {
        console.log("Mongodb connection failed : ",error.message)
        process.exit(1)
    }
}

export default dbConnect