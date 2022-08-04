import { Box, Button, Paper,  Stack, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Rating } from './Rating';

interface IProductCardProps {
  product: any;
}

const sxImageWrapper = {
  p: 4,
  width: '100%',
  height: '14rem'
}

const sxImage = {
  objectFit: 'contain',
  objectPosition: 'center',
  height: '100%',
  width: '100%',
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Paper sx={{ height: '100%' }}>
      <Box sx={sxImageWrapper}>        
        <Box
          component='img'
          src={product.image}
          alt={product.title}
          sx={sxImage}
        />
      </Box>

      <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>        
        <Stack spacing={1} sx={{ mb: '2rem' }}>          
          <Typography fontSize={32}> R$ {product.price}</Typography>
          <Typography>{product.title}</Typography>
          <Rating rating={product.rating} />
        </Stack>
        <Button fullWidth variant='contained' startIcon={<AddShoppingCartIcon/>} sx={{ mt: 'auto!important' }}>COMPRAR</Button>
      </Box>
    </Paper>
  )
}