import MessageService from "../service/message.service.js"
import Conversations from "../repository/message.repository.js"

const messageService = new MessageService(new Conversations())

const getMessages =async (req, res)=>{
    try{
        const {id} = req.params
        const senderId = req.user.id
        const reciverId = id

        const getAllMessages = await messageService.getAllMessages(reciverId, senderId)
        if(!getAllMessages){
            res.status(404).json(
                {
                    success: false,
                    message: 'no messages are there'
                }
            )
        }
        return res.status(200).json(
            {
                success: true,
                message: 'messages fetched successfully',
                data: getAllMessages
            }
        )
    }catch(err){
        console.log(err.message)
        throw err
    }
}

const sendMessage =async (req,res)=>{
    try{
        const {id} = req.params
        const senderId = req.user.id
        const reciverId = id
        const message = req.body

        const messageToBeSent = await messageService.sendMessages(reciverId, senderId, message)
        if(!messageToBeSent){
            return res.status(400).json(
                {
                    success: false,
                    message: 'failed to send message'
                }
            )
        }
        return res.status(200).json(
            {
                success: true,
                message: 'message sent successfully'
            }
        )
    }catch(err){
        console.log(err.message)
        throw err
    }
}

export {
    getMessages,
    sendMessage
}