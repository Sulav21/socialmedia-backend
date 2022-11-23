import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 8000
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

// Routers
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