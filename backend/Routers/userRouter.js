import express from 'express'
import { createUser, deleteUser, getAlleUser, getByIdUser, updateUser } from '../Controllers/userController.js'

const router = express.Router()

router.post('/user', createUser)
router.put('/update/:id', updateUser)
router.get('/getall', getAlleUser)
router.get('/getbyid/:id', getByIdUser)
router.delete('/delete/:id', deleteUser)


export default router
