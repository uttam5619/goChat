import UserRepository from "../repository/user.repository.js";

class UserService{

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async updateTheUser(req){
        try{
            //image uploaded on cloudinary
            const updatedUser = await this.userRepository.updateTheUser(req)
            return updatedUser
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

    async getTheUser(id){
        try{
            const user =await this.userRepository.getTheUser(id)
            return user
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

    async deleteTheUser(id){
        try{
            await this.userRepository.deleteTheUser(id)
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

}

export default UserService