import { Box, Typography, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { ListProduct } from "../../../product/ListProduct/ListProduct";
import { getAllProductThunk } from "../../../product/redux/Action";
import { useStyles } from "./ListNewProduct.style";

export const ListNewProduct = (): JSX.Element => {

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const listNewProduct = useAppSelector(state => state.ProductReducer.listProduct); 
  useEffect(() => {
    dispatch(getAllProductThunk());
  }, []);
  return(
    <Box>
      <Box className={classes.container}>
        <Typography variant='h4' className={classes.title}>- SẢN PHẨM MỚI</Typography>
        <ListProduct listProduct={listNewProduct} />
        <Box className={classes.pagination}><Pagination count={100} color="primary" size="large"/></Box>
      </Box>
    </Box>
  );
};