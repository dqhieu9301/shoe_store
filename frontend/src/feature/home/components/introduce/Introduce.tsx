import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './Introduce.style';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

export const Introduce = (): JSX.Element => {
  const classes = useStyles();
  return(
    <Box className={classes.introduce}>
      <Box className={classes.container}>
        <Box className={classes.item}>
          <PaymentOutlinedIcon sx={{ fontSize: '50px' }}/>
          <Typography variant='h3' textAlign='center' sx={{ fontSize: '25px', fontWeight: '600', color: 'var(--color-orange)' }}>CAM KẾT CHÍNH HÃNG</Typography>
          <Typography variant='h4' textAlign='center' sx={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px' }}>100% Authentic</Typography>
          <Typography variant='h5' textAlign='center' sx={{ fontSize: '13px' }}>Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...</Typography>
        </Box>
        <Box className={classes.item}>
          <LocalShippingOutlinedIcon sx={{ fontSize: '50px' }}/>
          <Typography variant='h3' textAlign='center' sx={{ fontSize: '25px', fontWeight: '600', color: 'var(--color-orange)' }}>GIAO HÀNG HỎA TỐC</Typography>
          <Typography variant='h4' textAlign='center' sx={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px' }}>Express delivery</Typography>
          <Typography variant='h5' textAlign='center' sx={{ fontSize: '13px' }}>SHIP hỏa tốc 1h nhận hàng trong nội thành HCM</Typography>
        </Box>
        <Box className={classes.item}>
          <PhoneInTalkOutlinedIcon sx={{ fontSize: '50px' }}/>
          <Typography variant='h3' textAlign='center' sx={{ fontSize: '25px', fontWeight: '600', color: 'var(--color-orange)' }}>HỖ TRỢ 24/24</Typography>
          <Typography variant='h4' textAlign='center' sx={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px' }}>Supporting 24/24</Typography>
          <Typography variant='h5' textAlign='center' sx={{ fontSize: '13px' }}>Gọi ngay</Typography>
        </Box>
      </Box>     
    </Box>
  );
};