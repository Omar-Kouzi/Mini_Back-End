import mongoose from "mongoose";
import dotenv from "dotenv"

const db = async ()=>{
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect((process.env.MONGO_URI),{
            useNewUrlParser: true,  
            useUnifiedTopology:true
        })
        console.log('MongoDB is connected')
    }catch (err){
        console.error(err.message);
        process.exit(1);

    }
}
export default db;