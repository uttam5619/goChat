import User from '../models/user.model.js'
import { defaultProfileLogo } from '../utils/constant.js';

const cookieOptions ={
    HttpOnly: true,
    secure: true,
    maxAge: 7*24*60*60*1000
}

const signUp =async (req,res)=>{
    try{
        const { name, email, username, password, confirmPassword, gender }= req.body
        if(!name|| !username|| !email|| !password|| !confirmPassword || !gender){
            return res.status(400).json(
                {
                    sucess:false,
                    message: 'provide the mandatory details'
                }
            );
        }
        if(password !== confirmPassword){
            return res.status(400).json(
                {
                    sucess:false,
                    message:'password and confirm password not matched'
                }
            );
        }

        const isUserAlreadyRegistered = await User.findOne({email})
        if(isUserAlreadyRegistered){
            return res.status(400).json({
                success:false,
                message: 'an user is already registered with this email'
            })
        }
        const user= await User.create({
            name,
            username,
            email,
            gender,
            password,
            confirmPassword,
            profilePicture:{
                public_id: email,
                secure_url: defaultProfileLogo
            }
        })
        if(!user)return res.status(400).json(
            {
                success:false,
                message: 'failed to register the user'
            }
        )
        await user.save()
        const registeredUser = await User.findById(user._id).select('-password')
        const token= await registeredUser.generateAccessToken()
        if(!token) return res.status(400).json(
            {
                success:false,
                message:'failed to generate access token'
            }
        )
        res.cookie('token', token, cookieOptions)
        return res.status(201).json(
            {
                success:true,
                message:'user registered successfully',
                data: registeredUser
            }
        )
    }catch(err){
        console.log(err)
        console.log(err.message)
    }

}


const signIn =async (req,res)=>{
    const { username, email, password } = req.body
    if(!username || !email || !password) return res.status(400).json(
        {
            success: false,
            message: 'please provide the mandatory details'
        }
    )
    const isUserRegistered = await User.findOne({email})
    if(!isUserRegistered) return res.status(400).json(
        {
            success: false,
            message: 'no user found with this email'
        }
    )
    const user = await User.findById(isUserRegistered._id).select('-password')
    const token = await user.generateAccessToken()
    if(!token) return res.status(400).json(
        {
            success: false,
            message: 'failed to generate access token'
        }
    )
    res.cookie('token', token, cookieOptions)
    return res.status(200).json(
        {
            success:true,
            message: 'signIn successfully',
            data: user
        }
    )
}

const signOut = ()=>{

}

const forgotPassword = ()=>{

}

export {
    signIn,
    signUp,
    signOut,
    forgotPassword
}