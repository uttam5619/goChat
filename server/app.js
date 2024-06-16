import express from 'express';
import appRouter from './src/routes/mainRoute.js';

const app = express();

app.use('/gochat',appRouter)

export default app