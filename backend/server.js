import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import user from './Routers/userRouter.js'
import login from './Routers/loginRouter.js'

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use('/api', user)
app.use('/api', login)

app.listen(port, () => {
    console.log('server run on port🚀:', port);

})