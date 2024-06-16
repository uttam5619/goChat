import { config } from "dotenv";
import app from "./app.js";

config()

const PORT = process.env.PORT || 5400

app.listen(PORT,()=>{
    console.log(`server up and listening on ${PORT}`)
})