import express, { Application } from "express";
import dotenv  from 'dotenv';

const app: Application = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, (): void => { console.log(`Connected successfully on port ${port}`);});