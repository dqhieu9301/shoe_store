import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IInforUser, IPayloadCreateToken } from "../interface/interface";
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
    }
    else {
      const accessToken = generateAccessToken({id: user.id});
      res.status(200).json({
        success: true,
        result: {
          accessToken: accessToken,
          data: user
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

export { login, signup };