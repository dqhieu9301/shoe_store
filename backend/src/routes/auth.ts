import express from "express";
import { check } from "express-validator";
import {login, refreshToken, signup}  from '../controllers/authController';

const routerAuth = express.Router();

routerAuth.post('/login',
  check('username').notEmpty().withMessage("cannot empty"),
  check('password').notEmpty().withMessage("cannot empty"),
  login);

routerAuth.post('/signup', 
  check('username').notEmpty().withMessage("cannot empty").isLength({ min: 5 }).withMessage("min 5 characters").matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage("must not contain special characters"),
  check('password').notEmpty().withMessage("cannot empty").isLength({ min: 8 }).withMessage("min 8 characters"),
  signup);

routerAuth.post('/refreshToken', refreshToken);

export default routerAuth;