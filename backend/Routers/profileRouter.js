import express from 'express'
import { checkToken } from '../Middlewares/checktokenMiddleware.js'
import { createProfile, getAllProfile, updateProfile } from '../Controllers/profileController.js'

const router = express.Router()

router.post('/create', checkToken, createProfile)
router.put('/update/:id', checkToken, updateProfile)
router.get('/getall', getAllProfile)


export default router
