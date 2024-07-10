import express from 'express'
import { getMessages, sendMessage } from '../../controllers/message.controller.js'

const MessageRoute = express.Router()

MessageRoute.get('/:id', getMessages)
MessageRoute.post('/:id', sendMessage)

export default MessageRoute