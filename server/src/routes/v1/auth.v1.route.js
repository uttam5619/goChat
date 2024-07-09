import express from 'express'
import { signIn, signOut, signUp } from '../../controllers/auth.controller.js'
import isLoggedIn from '../../middlewares/isloggedIn.js'

const Authv1Route = express.Router()

Authv1Route.post('/signIn', signIn)
Authv1Route.post('/signUp', signUp)
Authv1Route.post('/signOut', isLoggedIn, signOut)

export default Authv1Route