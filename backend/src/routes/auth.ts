import express from "express";
import {login, signup}  from '../controllers/authController';

const routerAuth = express.Router();

routerAuth.post('/login', login);
routerAuth.post('/signup', signup);

export default routerAuth;