import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    books:[{
        book:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book',
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
            min:1
        }
    }],
    rentedAt:{
        type:Date,
        default:Date.now
    },
    dueDate:{
        type:Date,
        required:true
    },
    returnedAt:{
        type:Date
    },
    isReturned:{
        type:Boolean,
        default:false
    },
    fine:{
        type:Number,
        default:0
    }

},{timestamps:true})

const Rental  = mongoose.model('Rental',rentalSchema)