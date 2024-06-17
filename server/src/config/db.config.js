import mongoose from "mongoose"

const connectDB =()=>{
    mongoose.connect(`mongodb://localhost:27017`)
    .then((e)=>{
        console.log(`connection established with mongoDB ${e.connection.host}`)
    }).catch((err)=>{
        console.log(`failed to connect with mongoDB`)
        process.exit(1)
    })
}

export default connectDB
