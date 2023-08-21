import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to Mongodb ${conn.connection.host}`);
    }
    catch(error){
        console.log(`database error ${error}`);
    }
}
export default connectDB;