import express, { Application } from "express";
import dotenv  from 'dotenv';
import route from "./routes";

require('./config/mongodb');

const app: Application = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
route(app);
app.listen(port, (): void => { console.log(`Connected successfully on port ${port}`);});