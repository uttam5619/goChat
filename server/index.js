import { config } from "dotenv";
import app from './app.js'
import connectDB from "./src/config/db.config.js";
import ServerConfig from "./src/config/server.config.js";

config()

const StartServer = async()=>{
    const database = await connectDB()
    if(database){
        ServerConfig()
    }else{
        process.exit(1)
    }
}

StartServer()
