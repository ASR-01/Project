import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDatabase = async () =>{
    try {

   const {connection} =  await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
    console.log(`mongodb Connection SuccessFull !! DB Host:${connection.host}`)
        
    } catch (error) {
    console.log('Mongodb connection Error',error);
    process.exit(1)


    }
}

export default ConnectDatabase;