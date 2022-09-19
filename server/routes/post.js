import express from "express";

const postRouter = express.Router();

postRouter.get('/',(req,res)=>{
    res.send('Testing')
})

export default postRouter;