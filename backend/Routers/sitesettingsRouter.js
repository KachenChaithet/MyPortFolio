import express from 'express'
import { checkToken } from '../Middlewares/checktokenMiddleware.js'
import { createsitesettings, getAllsitesettings, updatesitesettings } from '../Controllers/sitesettingsController.js'

const router = express.Router()

router.post('/create', checkToken, createsitesettings)
router.put('/update/:id', checkToken, updatesitesettings)
router.get('/getall', getAllsitesettings)


export default router
