import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IInforUser, IPayloadCreateToken } from "../interface/interface";
import { accountAdminModel } from "../model/admin_account";
import { accountModel } from "../model/user_account";

const { sign } = jwt;

function generateAccessToken(payload: IPayloadCreateToken) {
  const secret = process.env.SECRET;
  return sign(payload, secret as string, {expiresIn: '7d'});
}

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(401).json({
      success: false,
      message: "Missing data field"
    });
    return;
  }
  accountModel.findOne({ username: username, password: password}, (err: Error, user: IInforUser) => {
    if(err) throw err;
    if(!user) {
      res.status(401).json({
        success: false,
        message: "Incorrect account or password"
      });
      return;
    }
    else {
      const accessToken = generateAccessToken({id: user.id, username: user.username});
      res.status(200).json({
        success: true,
        result: {
          accessToken: accessToken
        }
      });
    }
  });
}

async function signup(req: Request, res: Response) {
  const { username, password} = req.body;
  if(!username || !password) {
    res.status(401).json({
      success: false,
      message: "Missing data field"
    });
    return;
  }
  accountModel.findOne({ username: username }, (err: Error, user: IInforUser) => {
    if(err) throw err;
    if(user) {
      res.status(401).json({
        success: false,
        message: "Username already exists"
      });
    } else {
      const newUser = new accountModel({
        username: username,
        password: password
      });
      newUser.save(() => {
        res.status(200).json({
          success: true,
          message: "Successful created new user"
        });
      }); 
    }
  });
}

async function loginAdmin(req: Request, res: Response) {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(401).json({
      success: false,
      message: "Missing data field"
    });
    return;
  }
  accountAdminModel.findOne({ username: username, password: password}, (err: Error, user: IInforUser) => {
    if(err) throw err;
    if(!user) {
      res.status(401).json({
        success: false,
        message: "Incorrect account or password"
      });
      return;
    }
    else {
      const accessToken = generateAccessToken({id: user.id, username: user.username});
      res.status(200).json({
        success: true,
        result: {
          accessToken: accessToken
        }
      });
    }
  });
}

export { login, signup, loginAdmin };