//require('dotenv').config({path:'./env'}); // this fine but not match import statment
import mongoose from "mongoose";
import connectDB  from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js"


dotenv.config({
    path: './env'
});
const PORT = process.env.PORT || 8000;
// calling connectionDb from db/index.js
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening on the Port ${PORT}`);
    })
})
.catch((error)=>{
    aap.on("error",()=>{ 
        console.log("Mongo Db connenction failed: ", error);
    });
});






// we can wirte full code for db connection on this page but follow the moduler approch 
// 
// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         aap.on("error",()=>{
//             console.log("error from the expres app connection: ", error);
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening of the port ${process.env.PORT}.`);
//         })
//     } catch (error) {
//         console.log("Error at the db connection time: ", error);
//         throw error;
//     }
// })()














// simple procedure 
// function connectionDB(){}
// connectionDB()

// //but implementing this efi
// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGOODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERRor: ", error);
//     }
// })()