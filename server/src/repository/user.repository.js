import User from "../models/user.model.js";

class UserRepository {

    async updateTheUser(req){
        try{
            const { id } = req.body
            const user = await User.findById(id)
            if(!user){
                return res.status(404).json({
                    success: false,
                    message: `no such user found with id : ${id}`
                })
            }
            const updatedUser = await User.findByIdAndUpdate(
                id,
                {
                    $set: req.body
                },
                {
                    runValidators: true,
                }
            )
            return updatedUser
        }catch(err){
            console.log(err.message)
            throw err
        }
    }


    async getTheUser(id){
        try{
            if(!id){
                return res.status(400).json({
                    success: false,
                    message: `null ${id} is not valid for getting the user`
                })
            }
            const user = await User.findById(id)
            if(!user){
                return res.status(404).json({
                    success: false,
                    message: `user not found with id: ${id}`
                })
            }
            return user
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

    async deleteTheUser(id){
        try{
            if(!id){
                return res.status(404).json({
                    success: false,
                    message: `${id} is not valid for deleting the user`
                })
            }
            const user= await User.findById(id)
            if(!user){
                return res.status(404).json({
                    success: false,
                    message: `user not found with id: ${id}`
                })    
            }
            await User.findByIdAndDelete(id)
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

}

export default UserRepository