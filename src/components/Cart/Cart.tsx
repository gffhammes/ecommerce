import { Box, SwipeableDrawer, SxProps, Theme } from '@mui/material'
import React, { useContext } from 'react'
import { ProductsList } from './ProductsList';
import { CartContext } from '../../Contexts/Cart/CartContext';
import { CartHeader } from './CartHeader';
import { CartButtons } from './CartButtons';
import { CartTotal } from './CartTotal';

const sxCartWrapper: SxProps<Theme> = {
   height: '100%',
   p: 5,
   width: 'min(100vw, 25rem)',
   display: 'flex',
   flexDirection: 'column',
}

export const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={cartContext.open}
      onClose={cartContext.handleCloseCart}
      onOpen={cartContext.handleOpenCart}
    >
      <Box sx={sxCartWrapper}>
        <CartHeader />
        <ProductsList />
        <CartTotal />
        <CartButtons />
       </Box>
    </SwipeableDrawer>
  )
}