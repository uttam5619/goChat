import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"


class Conversations{

    async sendMessage(reciverId, senderId, message){
        try{ 
            const messageToBeSent = await Message.create({
                reciverId,
                senderId,
                message
            })
            const conversation = await Conversation.findOne(
                {
                    participants: {$all: [reciverId, senderId]}
                }
            )
            if(!conversation){
                await Conversation.create({
                    participants: {$all: [reciverId, senderId]}
                })
                const getTheConversation = await Conversation.findOne(
                    {
                        participants: {$all: [reciverId, senderId]}
                    }
                )
                await getTheConversation.messageList.push(messageToBeSent._id)
                await getTheConversation.save()
            }else{
                await conversation.messageList.push(messageToBeSent._id)
                await conversation.save()
            }
            await message.save()
            
            // socket.io functionality

            return [message, conversation]
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

    async getAllMessages(reciverId, senderId){
        try{
            const getallTheMessages = await Conversation.findOne(
                {
                    participants: {$all: [reciverId, senderId]}
                }
            ).populate('messageList')
            return getallTheMessages
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

}

export default Conversations