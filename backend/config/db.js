import mongoose from "mongoose";
import dotenv from "dotenv"

const ATLAS_URL = process.env.MONGO_URI;
const db = async ()=>{
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect(("mongodb+srv://omarkouzi:Dpb3GLLj7Zb5gDyy@mern.ambb2tx.mongodb.net/mern"),{
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