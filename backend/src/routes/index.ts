import { Application } from 'express';
import { isAuth } from '../middleware/jwt_auth';
import routerAuth from "./auth";
import routerProduct from './product';
import routerUser from './user';

function route(app: Application) {
  app.use('/api/auth', routerAuth);
  app.use('/api/product', routerProduct);
  app.use('/api/user', isAuth, routerUser);
}

export default route;