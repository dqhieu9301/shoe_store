import express from "express";
import {login, signup, statisticalUser}  from '../controllers/authController';

const routerAuth = express.Router();

routerAuth.post('/login', login);
routerAuth.post('/signup', signup);
routerAuth.get('/statisticalUser', statisticalUser);

export default routerAuth;