import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 8000
// Middlewares
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

// Database Connection
import { dbConnection } from './src/config/db.js'
dbConnection()

// Routers
// auth router
import authRouter from './src/Router/authRouter.js'
app.use('/auth',authRouter)

app.get('/',(req,res)=>{
    res.json({
        message:"You have reached backend api !"
    })
})

// app bound with port to serve on internet
app.listen(PORT,(error)=>{
    error && console.log(error.message)
    console.log(`Your server is running on PORT:${PORT}`)
})