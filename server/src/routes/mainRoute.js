import express from 'express'
import Authv1Route from "./v1/auth.v1.route.js";
import Userv1Route from './v1/user.v1.route.js';
import isLoggedIn from '../middlewares/isloggedIn.middleware.js';
import MessageRoute from './v1/message.v1.route.js';

const appRouter = express.Router()

appRouter.use('/v1/auth', Authv1Route)
appRouter.use('/v1/user', Userv1Route)
appRouter.use('/v1/message', MessageRoute )

export default appRouter