import mongoose from "mongoose"

const connectDB =async ()=>{
    const isDatabaseConnected = await mongoose.connect(`mongodb://localhost:27017`)
    if(isDatabaseConnected){
        console.log(`database connection established with mongoDB ${isDatabaseConnected.connection.host}`)
    }else(
        console.log(`failed to connect with mongoDB`)
    )
}

export default connectDB
