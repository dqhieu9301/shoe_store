/* eslint-disable @typescript-eslint/no-unused-vars */
import express, {Request, Response} from 'express';
import { NextFunction } from "express";
import jwt from 'jsonwebtoken';

function isAuth (req: Request, res: Response , next: NextFunction) {
  const authorizationHeader = req.headers['authorization'];
  if(!authorizationHeader) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized!",
    });
  }
  const token = authorizationHeader.split(' ')[1];
  jwt.verify(token, process.env.SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: err.toString(),
      });
    }
    next();
  });
}

export { isAuth };