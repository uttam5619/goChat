

class MessageService{

    constructor(conversation){
        this,conversation = conversation
    }

    async sendMessages(reciverId, senderId){
        try{
            const message = await this.conversation.sendMessages(reciverId, senderId)
            return message
        }catch(err){
            console.log(err.message)
            throw err
        }
    }

    async getAllMessages(reciverId, senderId){
        try{
            const allMessages = await this.conversation.getAllMessages(reciverId, senderId)
            return allMessages
        }catch(err){
            console.log(err.message)
            throw err
        }
    }
}


export default MessageService