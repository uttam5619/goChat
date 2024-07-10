

class MessageService{

    constructor(conversation){
        this,conversation = conversation
    }

    async sendMessages(reciverId, senderId, message){
        try{
            const messageToBeSent = await this.conversation.sendMessages(reciverId, senderId, message)
            return messageToBeSent
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