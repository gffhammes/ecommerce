import { Box, List, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';
import { EmptyCart } from './EmptyCart';
import { ProductListItem } from './ProductListItem';


export const ProductsList = () => {
  const cartContext = useContext(CartContext);

  return (
    <Box sx={{ height: '100%', my: 5, overflowY: 'auto' }}>
      {!cartContext.isEmpty &&
        <List sx={{ width: '100%' }}>
          {cartContext.cart.map(cartItem => {
            return (
              <ProductListItem key={cartItem.product.id} cartItem={cartItem} />
            )
          })}
        </List>
      }
      {cartContext.isEmpty && <EmptyCart />}
    </Box>
  )
}