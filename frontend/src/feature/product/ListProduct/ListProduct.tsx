/* eslint-disable react/jsx-key */
import React from "react";
import { IProduct } from "../../../interface/interface";
import { Product } from "../Product/Product";
import Gird from '@mui/material/Grid';
import { useStyles } from "./ListProduct.style";

interface Props {
    listProduct: IProduct[]
}

export const ListProduct: React.FC<Props> = ( { listProduct } ) => {
  const classes = useStyles();
  return(
    <Gird container spacing={5} className={classes.container}>
      {
        listProduct.map((item: IProduct) => {
          return (
            <Gird item xl={2.4} lg={3} md={4} xs={12}>
              <Product product={item}/>
            </Gird>
          );
        })
      }
    </Gird>
  );
};