import express from 'express'
import { signIn, signOut, signUp } from '../../controllers/auth.controller.js'

const Authv1Route = express.Router()

Authv1Route.get('/SignIn', signIn)
Authv1Route.post('/SignIn', signUp)
Authv1Route.post('/signOut', signOut)

export default Authv1Route