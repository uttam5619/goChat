import User from "../models/user.model.js"

const isLoggedIn = async (req, res, next) =>{
    try{
        const { token } = req.cookies
        console.log(token)
        if(!token){
            //logOut
            return res.status(400).json({
                success:false,
                message: 'token expired'
            })
        }
        const decodedPayload = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedPayload.id).select('-password')
        req.user = user
        next()
    }catch(err){
        console.log(err.message)
        throw err
    }
}

export default isLoggedIn