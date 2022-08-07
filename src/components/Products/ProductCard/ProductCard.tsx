import { Box, Button, Paper,  Stack, Typography } from '@mui/material'
import React, { useCallback, useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Rating } from './Rating';
import { CartContext } from '../../../Contexts/Cart/CartContext';
import { IProduct } from '../../../interfaces/Product';
import { currencyBRLIntl } from '../../../helpers/currencyBRLIntl';

interface IProductCardProps {
  product: IProduct;
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
  const context = useContext(CartContext);

  const handleAddToCartClick = useCallback(() => {
    context.addProductToCart(product);
  }, [context, product])

  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
          <Typography fontSize={32}>{currencyBRLIntl(product.price)}</Typography>
          <Typography>{product.title}</Typography>
          <Rating rating={product.rating} />
        </Stack>
        <Button onClick={handleAddToCartClick} fullWidth variant='outlined' startIcon={<AddShoppingCartIcon/>} sx={{ mt: 'auto!important' }}>COMPRAR</Button>
      </Box>
    </Paper>
  )
}