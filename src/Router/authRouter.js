import express from "express";

const router = express.Router()

router.get('/',(req,res,next)=>{
    try {
        res.json({
            message:"You have reached the auth api"
        })
    } catch (error) {
        next(error)
    }
})




export default router