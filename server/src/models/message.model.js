import { Schema, model} from 'mongoose'
import User from './user.model.js'

const MessageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reciverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type:String,
        required: true,
        lowercase: true,
        trim: true,
    }
},{timestamps: true})

const Message = model('Message', MessageSchema)
export default Message