import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { EStatusProduct } from "../../../interface/interface";
import { useStyles } from "./Product.style";

interface Props {
  product: {
    id: string
    name: string
    quantity: number
    cost: number
    status: number
    discount: number
    shoeBrand: string
    pathImage: string
  }
}

export const Product: React.FC<Props> = ({ product }) => {

  const classes = useStyles();
  return(
    <Box className={classes.container}>
      <img src={product.pathImage} className={classes.image}/>
      <Box className={classes.content}>
        <Typography variant="h5" className={classes.name}>{product.name}</Typography>
        <Rating name="read-only" value={5} readOnly size="small" sx={{ marginTop: '30px' }}/>
        <Typography variant="h5" className={classes.cost}>{product.cost} đ</Typography>
        {
          product.discount !== 0 && <Typography variant="h5" className={classes.newCost}>{product.cost - (product.cost * product.discount)/100 } đ</Typography>
        }
        {
          product.status === EStatusProduct.NEW && <Box className={classes.status}>New</Box>
        }
        {
          product.discount !== 0 && <Box className={classes.discount}>-{product.discount}%</Box>
        }
      </Box>
    </Box>
  );
};