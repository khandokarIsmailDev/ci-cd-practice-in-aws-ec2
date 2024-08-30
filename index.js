import dotenv from 'dotenv'
import express from 'express';
dotenv.config()

const port = process.env.PORT

const app = express()


app.get('/',(req,res) =>{
    res.status(200).send(`hello, from node app running port ${port}`)
})

app.listen(port,()=>{
    console.log(`port is running ${port}`)
})