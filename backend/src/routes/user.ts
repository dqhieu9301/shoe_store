import express from "express";
import { getInforUser } from "../controllers/userController";

const routerUser = express.Router();

routerUser.get('/inforUser', getInforUser);

export default routerUser;