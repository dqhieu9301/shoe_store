import { Application } from 'express';
import routerAuth from "./auth";
import routerProduct from './product';

function route(app: Application) {
  app.use('/api/auth', routerAuth);
  app.use('/api/product', routerProduct);
}

export default route;