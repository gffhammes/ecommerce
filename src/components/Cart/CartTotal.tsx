import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';

export const CartTotal = () => {
  const cartContext = useContext(CartContext);

  return (
    <Stack direction='row' justifyContent='space-between'  sx={{ mt: 'auto', mb: 2 }}>
      <Typography fontSize={18}>Total</Typography>
      <Typography fontSize={18}>R$ {cartContext.totalPrice.toFixed(2)}</Typography>
    </Stack>
  )
}