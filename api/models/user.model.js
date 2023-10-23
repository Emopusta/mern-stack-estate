import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/dlkpzxt6m/image/upload/v1697101677/hw4dxmu21udcjkcpjeue.png",
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;