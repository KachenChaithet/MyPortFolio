import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import skill from './Routers/skillRoter.js'
import user from './Routers/userRouter.js'
import login from './Routers/loginRouter.js'
import project from './Routers/projectRouter.js'
import profile from './Routers/profileRouter.js'
import sitesetting from './Routers/sitesettingsRouter.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors({
    origin: process.env.URL_FRONTEND || 'http://localhost:5173'
}))
app.use(express.json())
app.use('/upload', express.static(path.join(__dirname, 'uploads')))
app.use('/project', project)
app.use('/api', user)
app.use('/api', login)
app.use('/skill', skill)
app.use('/profile', profile)
app.use('/sitesetting', sitesetting)

app.listen(port, () => {
    console.log('server run on port🚀:', port);

})