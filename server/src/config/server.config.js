import express from 'express';

const serverInstance = express()

const ServerConfig = ()=>{
    const port = process.env.PORT || 5400
    serverInstance.listen(port, ()=>{
        console.log(`server up and listining on port: ${port}`)
    })
}

export default ServerConfig