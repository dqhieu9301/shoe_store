import { IInforUser } from './../interface/interface';
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt  from 'jsonwebtoken';
import { Request, Response } from "express";
import { accountModel } from '../model/user_account_model';

async function getInforUser(req: Request, res: Response) {
  const authorizationHeader = req.headers['authorization'] as string;
  const token = authorizationHeader.split(' ')[1];
  jwt.verify(token, process.env.SECRET as string, (err: any, decoded: any) => {
    const { id, username } = decoded;
    accountModel.findOne({ id: id, username: username}, (err: Error, user: IInforUser) => {
      if(err) throw err;
      res.status(200).json({
        result: {
          inforUser: {
            username: user.username
          }
        }
      });
    });
  });
}

export { getInforUser };