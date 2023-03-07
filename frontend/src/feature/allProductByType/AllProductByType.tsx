/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FilterProduct } from "./components/filterProduct/FilterProduct";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useStyles } from "./AllProductByType.style";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getListProductByType } from "../product/redux/Action";
import { ListProduct } from "../product/ListProduct/ListProduct";
import { quantityProductOnePage } from "../../constant/constant";

export const AllProductByType = (): JSX.Element => {

  const classes = useStyles();
  const url = window.location.href;
  const statusProduct = url.split('/').at(url.split('/').length - 2);
  const { page } = useParams();
  const dispatch = useAppDispatch();
  const listProduct = useAppSelector(state => state.ProductReducer.listProduct);
  const countProduct = useAppSelector(state => state.ProductReducer.countProduct);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(getListProductByType({ type: statusProduct, page: page}));
  }, [page]);

  const handleChangePage = (event: any, value: number) => {
    navigate(`/product/${statusProduct}/${value}`);
  };
  return(
    <Box sx={{marginTop: '80px'}}>
      <FilterProduct/>
      <Box sx={{ width: '90%', margin: '30px auto'}}>
        <Typography className={classes.title}>Trang trủ <KeyboardArrowRightIcon/> Sản phẩm <KeyboardArrowRightIcon/> {statusProduct && statusProduct?.charAt(0).toUpperCase() + statusProduct?.slice(1)}</Typography>
        <ListProduct listProduct={listProduct}/>  
       {
         countProduct !== 0 &&  <Box className={classes.pagination}><Pagination onChange={handleChangePage} page={Number(page)} count={Math.ceil(countProduct / quantityProductOnePage)} color="primary" size="large"/></Box>
       }
      </Box> 
    </Box>
  );
};