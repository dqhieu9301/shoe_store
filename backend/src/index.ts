import express, { Application, Request } from "express";
import dotenv  from 'dotenv';
import route from "./routes";
import cors from "cors";
import path from 'path';
import bodyParser  from 'body-parser';
require('./config/mongodb');

const app: Application = express();
dotenv.config();
const port = process.env.PORT;
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,       
  optionSuccessStatus:200
};

app.use(cors<Request>(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static((path.join(__dirname, '/assets'))));
route(app);
app.listen(port, (): void => { console.log(`Connected successfully on port ${port}`);});
