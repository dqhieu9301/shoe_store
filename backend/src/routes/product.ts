import express from 'express';
import { deleteProduct, getCountProduct, getProductByPage, saveProduct } from '../controllers/productController';
import { check } from 'express-validator';
import upload from '../config/uploadFile';
import { isAuth } from '../middleware/jwt_auth';

const routerProduct = express.Router();

routerProduct.post('/saveProduct', upload.single('pathImage'),
  check('name').notEmpty().withMessage("cannot empty").isString().withMessage("must be string"),
  check('quantity').isInt({ min: 0 }).withMessage("must be number and bigger 0"),
  check('cost').isInt({ min: 0 }).withMessage("must be number and bigger 0"),
  check('status').isInt({ min: 0, max: 1 }).withMessage("must be number"),
  check('discount').isInt({ min: 0, max: 100 }).withMessage("must be number and bigger 0 and less 100"),
  check('shoeBrand').notEmpty().withMessage("cannot empty"),
  check('pathImage').isEmpty().withMessage("cannot empty")
    .custom((value, { req }) => {if (!req.file) throw new Error("Profile Img is required"); return true;}),
  saveProduct);

routerProduct.post('/deleteProduct', isAuth,
  check('id').notEmpty().withMessage("can not empty"),
  deleteProduct);

routerProduct.get('/getProductByPage/:page', getProductByPage);
routerProduct.get('/getCountProduct/', isAuth, getCountProduct);

export default routerProduct;