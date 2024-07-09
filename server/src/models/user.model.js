import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


const userSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        minLength: [3, `the name shold contain atleast 3 characters`],
        maxLength: [60, `the name shold contain atmost 60 characters`],
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true,
        unique: true,
        minLength: [3, `the name shold contain atleast 3 characters`],
        maxLength: [60, `the name shold contain atmost 60 characters`],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, `password should contain atleast 6 characters`],
    },
    gender: {
        type: String,
        enum : ['male', 'female', 'other']
    },
    profilePicture: {
        public_id:{
            type: String // cloudinary 
        },
        secure_url:{
            type: String // cloudinary_url
        }
    }
})

userSchema.pre('save',async function(next){
   if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10)
    next()
   }
   return next()
})

userSchema.methods = {
    generateAccessToken: async function(){
        const token = await jwt.sign(
            {id:this._id, email:this.email, name: this.name, username: this.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '3h'}
        )
        return token
    },
    comparePassword: async function(password){
        return await bcrypt.compare(password, this.password)
    }
}

const User = model('user', userSchema)
export default User

