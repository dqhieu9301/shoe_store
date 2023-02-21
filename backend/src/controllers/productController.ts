
import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import dotenv  from 'dotenv';
import { productModel } from "../model/product_model";
import { IProduct } from "../interface/interface";
import { quantityProductOnePage } from "../constant/constant";

dotenv.config();

function saveProduct(req: Request, res: Response) {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const fileName = req.file?.filename as string;
    const pathImage = `${process.env.URL_SERVER}/images/${fileName}`;
    const data = { ...req.body, pathImage: pathImage };
    const newProduct = new productModel(data);
    newProduct.save((err) => {
      if(err) {
        return res.status(400).json({
          error: "An error occurred"
        });
      } else {
        return res.status(201).json({
          success: true,
          message: "create product success"
        });
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "error server"
    });
  }
}

function deleteProduct(req: Request, res: Response) {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
  const { id } = req.body;
  productModel.findOne({ _id: id}, (err: Error, product: IProduct) => {
    if(err) {
      return res.status(400).json({
        success: false,
        error: "error server"
      });
    }
    if(!product) {
      return res.status(400).json({
        success: false,
        message: "product does not exist"
      });
    } else {
      productModel.deleteOne({ _id: id}, (err) => {
        if(err) {
          return res.status(400).json({
            success: false,
            error: "error server"
          });
        } else {
          return res.status(200).json({
            success: true,
            message: "delete successfully"
          });
        }
      });
    }
  });
}

function getProductByPage(req: Request, res: Response) {
  const page = Number(req.params.page);
  productModel.find({}, (err: Error, products: IProduct[]) => {
    if(err) {
      return res.status(400).json({
        success: false,
        error: "error"
      });
    }
    return res.status(200).json({
      success:  true,
      result: {
        listProduct: products
      }
    });
  }).skip((page - 1) * quantityProductOnePage).limit(quantityProductOnePage);
}

function getCountProduct(req: Request, res: Response) {
  productModel.find({}, (err: Error, products: IProduct[]) => {
    if(err) {
      return res.status(400).json({
        success: false,
        error: "error"
      });
    }
    return res.status(200).json({
      success:  true,
      result: {
        count: products.length
      }
    });
  });
}





export { saveProduct, deleteProduct, getProductByPage, getCountProduct };