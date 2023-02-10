import { Application } from 'express';
import routerAuth from "./auth";

function route(app: Application) {
  app.use('/api/auth', routerAuth);
}

export default route;