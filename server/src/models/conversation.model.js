import { Schema, model } from 'mongoose'
import User from './user.model'
import Message from './message.model'

const ConversationSchema = new Schema({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: User
        }
    ],
    messageList: [
        {
            type: Schema.Types.ObjectId,
            ref: Message,
            default: []
        }
    ]
},{timestamps: true})

const Conversation = model('Conversation', ConversationSchema)
export default Conversation