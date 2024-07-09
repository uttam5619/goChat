import express from 'express';
import appRouter from './src/routes/mainRoute.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

//to parse incomming request with json payloads from req.body
//app.use(express.json())
//to parse cokkies comming with incomming request object
app.use(cookieParser())
// to parse incomming request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/gochat',appRouter)

export default app