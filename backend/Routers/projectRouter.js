import express from 'express'
import { } from '../Controllers/userController.js'
import { createproject, deleteproject, getAlleproject, getByIdproject, updateproject } from '../Controllers/projectController.js'
import { checkToken } from '../Middlewares/checktokenMiddleware.js'
import { upload } from '../Middlewares/upload.js'

const router = express.Router()

router.post('/create', checkToken, upload, createproject)
router.put('/update/:id', checkToken, upload, updateproject)
router.get('/getall', getAlleproject)
router.get('/getbyid/:id', checkToken, getByIdproject)
router.delete('/delete/:id', checkToken, deleteproject)


export default router
