import dotenv from 'dotenv'
import ConnectDatabase from './db/database.js'
import app from './app.js'
dotenv.config({
    path:".env"
})

ConnectDatabase().then(()=>{
    const server = app.listen(process.env.PORT || 7000,(req,res)=>{
            console.log(`Server is Connected at PORT ~ ${process.env.PORT}`)
    })
    server.on("error",(error)=>{
    console.log(`Server Error`,error);
    throw error
   })

}).catch((error)=>{
   console.log("mongodb connection error",error);
})
