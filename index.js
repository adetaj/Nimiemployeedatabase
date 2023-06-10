
import express from 'express'
import dotenv from 'dotenv'
import { conn } from './dBase/database';
import router from './routes/employeeRoute';
dotenv.config();
conn();
const app = express();
app.use(express.json())

app.use("/", router)
const PORT = process.env.Port || 3000;
app.listen(PORT,console.log(`Server is running at ${PORT}`))