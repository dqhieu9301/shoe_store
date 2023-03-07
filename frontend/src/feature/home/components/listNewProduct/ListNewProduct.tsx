/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { quantityProductOnePage } from "../../../../constant/constant";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { ListProduct } from "../../../product/ListProduct/ListProduct";
import { getListProductByType } from "../../../product/redux/Action";
import { useStyles } from "./ListNewProduct.style";

export const ListNewProduct = (): JSX.Element => {

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const listNewProduct = useAppSelector(state => state.ProductReducer.listProduct); 
  const quantityProduct = useAppSelector(state => state.ProductReducer.countProduct);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListProductByType({type:'all', page: 1}));
  }, []);

  const handleChangePage = (event: any , value: number) => {
    navigate(`/product/all/${value}`);
  };
  return(
    <Box>
      <Box className={classes.container}>
        <Typography variant='h4' className={classes.title}>- DANH SÁCH CÁC SẢN PHẨM</Typography>
        <ListProduct listProduct={listNewProduct} />
        <Box className={classes.pagination}><Pagination onChange={handleChangePage}  count={Math.ceil(quantityProduct / quantityProductOnePage)} color="primary" size="large"/></Box>
      </Box>
    </Box>
  );
};