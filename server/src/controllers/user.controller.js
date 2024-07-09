import UserRepository from "../repository/user.repository.js"
import UserService from "../service/user.service.js"

const userService = new UserService(new UserRepository())

const updateUser=async (req,res) =>{
    try{
        const { id } = req.params
        if(!id){
            return res.status(400).json({
                success: false,
                message: `request body does not contain the id`
            })
        }
        const user  = await userService.updateTheUser(req.body)
        return res.status(200).json({
            success: true,
            message: `user updated successfully`,
            data: user
        })
    }catch(err){
        console.log(err.message)
        throw err
    }
}

const getAllUsers = (req, res) =>{
    
}

const getUser =async (req, res) =>{
    try{
        const { id } = req.body
        if(!id){
            return res.status(400).json({
                success: false,
                message: `request body does not contain the id`
            })
        }
        const user = await userService.getTheUser(id)
        return req.status(200).json({
            success: true,
            message: `user data fetched successfully`,
            data: user
        })
    }catch(err){
        console.log(err.message)
        throw err
    }
}

const deleteUser = async (req, res) =>{
    try{
        const { id } = req.body
        if(!id){
            return res.status(400).json({
                success: false,
                message: `request body does not contain the id`
            })
        }
        await this.userService.deleteTheUser(id)
        return res.status(200).json({
            success: true,
            message: `user deleted successfully`
        })
    }catch(err){
        console.log(err.message)
        throw err
    }
}

export {
    updateUser,
    getAllUsers,
    getUser,
    deleteUser
}