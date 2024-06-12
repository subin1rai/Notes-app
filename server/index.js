import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/nodeRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log('Connected to DB');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => console.log("server error 101"));

app.use("/api", route); 