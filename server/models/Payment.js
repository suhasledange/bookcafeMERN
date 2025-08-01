import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    rental:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Rental',
        required:true    
    },
    amount:{
        type:Number,
        require:true,
    },
    paymentMethod:{
        type:String,
        enum:['online','cash'],
        required:true,
    },
    status:{
        type:String,
        enum:['pending','completed','failed'],
        default:'pending'
    },
    transactionId:{
        type:String,
    },
    paymentDate:{
        type:Date,
        default:Date.now
    }

},{timestamps:true})

const Payment = mongoose.model('Payment',paymentSchema)
export default Payment