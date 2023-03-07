
import { Button } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React from 'react';
import { useStyles } from './FilterProduct.style';
export const FilterProduct = (): JSX.Element => {

  const classes = useStyles();
  const listCost = [
    { name: "Tất cả" },
    { name: "Dưới 3 triệu" },
    { name: "Từ 3 triệu tới 5 triệu" },
    { name: "Từ 5 triệu tới 10 triệu" },
    { name: "Trên 10 triệu" }
  ];

  const sortOrder = [
    {
      name: "Giá thấp tới cao"
    },
    {
      name: "Giá cao tới thấp"
    },
    {
      name: "Tên A - Z"
    },
    {
      name: "Tên Z - A"
    }
  ];

  const statusProduct = [
    {
      name: "Mới",
      status: 1
    },
    {
      name: "Cũ",
      status: 0
    }
  ];
  return(
    <Box sx={{ backgroundColor: '#f1f1f1'}}>
      <Box className={classes.container}>
        <Box className={classes.item}>
          <i className={classes.label}>Khoảng giá</i>
          <select className={classes.select}>
            {listCost.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </Box>
        <Box className={classes.item}>
          <i className={classes.label}>Sắp xếp theo</i>
          <select className={classes.select}>
            {sortOrder.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </Box>
        <Box className={classes.item}>
          <i className={classes.label}>Trạng thái sản phẩm</i>
          <select className={classes.select}>
            {statusProduct.map((option) => (
              <option key={option.status} value={option.status}>
                {option.name}
              </option>
            ))}
          </select>
        </Box>
        <Box className={classes.item}>
          <Button variant='contained' style={{textTransform: 'none'}} className={classes.btnFilter}>Tìm Giày Ngay </Button>
        </Box>
      </Box>
    </Box>
  );
};