import express from "express";
import {login}  from '../controllers/authController';

const routerAuth = express.Router();

routerAuth.post('/login', login);

export default routerAuth;