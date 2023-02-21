/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { validationResult } from 'express-validator';
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IInforUser, IPayloadCreateToken } from "../interface/interface";
import { accountModel } from "../model/user_account_model";
import { jwtExpirationRefreshToken, jwtExpirationToken } from '../constant/constant';

const { sign } = jwt;

function generateAccessToken(payload: IPayloadCreateToken) {
  const secret = process.env.SECRET;
  return sign(payload, secret as string, {expiresIn: jwtExpirationToken});
}

function genetateRefreshToken(payload: IPayloadCreateToken) {
  const secret = process.env.SECRET_REFRESH_TOKEN;
  return sign(payload, secret as string, {expiresIn: jwtExpirationRefreshToken});
}

async function login(req: Request, res: Response) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  const { username, password } = req.body;
  accountModel.findOne({ username: username, password: password}, (err: Error, user: IInforUser) => {
    if(err) throw err;
    if(!user) {
      res.status(400).json({
        success: false,
        message: "Incorrect account or password"
      });
      return;
    }
    else {
      const accessToken = generateAccessToken({ id: user.id, username: user.username });
      const refreshToken = genetateRefreshToken({ id: user.id, username: user.username });
      res.status(200).json({
        success: true,
        result: {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      });
    }
  });
}

async function signup(req: Request, res: Response) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { username, password} = req.body;
  accountModel.findOne({ username: username }, (err: Error, user: IInforUser) => {
    if(err) throw err;
    if(user) {
      res.status(401).json({ success: false, message: "Username already exists" });
    } else {
      const newUser = new accountModel({
        username: username,
        password: password
      });
      newUser.save(() => {
        res.status(200).json({ success: true,message: "Successful created new user" });
      }); 
    }
  });
}


function refreshToken(req: Request, res: Response) {
  const { refreshToken } = req.body;
  if(!refreshToken) {
    return res.status(403).json({ success: false, message: "Refresh Token is required!" });
  }
  jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN as string, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: err.toString(),
      });
    }
    const newAccessToken = generateAccessToken({id: decoded.id, username: decoded.username});
    res.status(200).json({
      result: {
        accessToken: newAccessToken
      }
    });
  });
}

export { login, signup, refreshToken };