import express from 'express'
import { checkToken } from '../Middlewares/checktokenMiddleware.js'
import { createSkill, deleteSkill, getAlleSkill, getByIdSkill, updateSkill } from '../Controllers/skillController.js'

const router = express.Router()

router.post('/create', checkToken, createSkill)
router.put('/update/:id', checkToken, updateSkill)
router.get('/getall', getAlleSkill)
router.get('/getbyid/:id', checkToken, getByIdSkill)
router.delete('/delete/:id', checkToken, deleteSkill)



export default router
