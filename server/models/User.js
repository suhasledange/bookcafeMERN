import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    avatar:{
        type:String,
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    googleId:{
        type:String
    }

},{timestamps:true})

const User =  mongoose.model('User',userSchema)
export default User;