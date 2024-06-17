import { config } from "dotenv";
import app from "./app.js";
import connectDB from "./src/config/db.config.js";

config()
const PORT = process.env.PORT || 5400

connectDB()

app.listen(PORT,()=>{
    console.log(`server up and listening on ${PORT}`)
})