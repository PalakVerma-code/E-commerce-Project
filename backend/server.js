import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloundinary.js';
import userRouter from './routes/userRoute.js';

// App config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();
//middleware
app.use(cors());
app.use(express.json());
// api endpoint
app.use('/api/users', userRouter);

app.get('/', (req, res) => res.status(200).send('Hello World!'));
// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));