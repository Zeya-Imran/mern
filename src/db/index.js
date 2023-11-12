// require('dotenv').config({path:'./env'});
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';



const connectDB = async ()=>{
    try {
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n 
        MongooDB connected !!! DB Host: ${connectionInstance.connection.host},
        from (DB) ${connectionInstance.connection.name}
        `);
        //console.log(connectionInstance.connection); // you can check multiple things
    } catch (error) {
        console.log("MONGOODB connection FAILED: ",error);
        process.exit(1);
    }
}

export default connectDB;