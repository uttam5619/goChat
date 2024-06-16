import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../../controllers/user.controller.js';

const Userv1Route = express.Router()

Userv1Route.put('/update', updateUser)
Userv1Route.get('/', getAllUsers)
Userv1Route.get('/:id', getUser)
Userv1Route.delete('/:id', deleteUser)

export default Userv1Route