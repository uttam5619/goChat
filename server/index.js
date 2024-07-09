import { config } from "dotenv";
import cors from 'cors'
import connectDB from "./src/config/db.config.js";
import app from "./app.js";


config()
app.use(cors())

const Port = process.env.PORT || 5400

connectDB()
app.listen(Port, ()=>{
    console.log(`server listining up on port ${Port}`)
})
