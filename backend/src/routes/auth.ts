import express from "express";
import {login, loginAdmin, signup}  from '../controllers/authController';

const routerAuth = express.Router();

routerAuth.post('/login', login);
routerAuth.post('/signup', signup);
routerAuth.post('/admin/login', loginAdmin);

export default routerAuth;