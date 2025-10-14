import express from 'express'
import { createUser, deleteUser, getAlleUser, getByIdUser, updateUser } from '../Controllers/userController.js'

const router = express.Router()

router.post('/user', createUser)
router.put('/update', updateUser)
router.get('/getall', getAlleUser)
router.get('/getbyid', getByIdUser)
router.delete('/delete', deleteUser)


export default router
