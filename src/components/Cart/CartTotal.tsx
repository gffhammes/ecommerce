import { Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';
import { currencyBRLIntl } from '../../helpers/currencyBRLIntl';

export const CartTotal = () => {
  const cartContext = useContext(CartContext);

  return (
    <Stack direction='row' justifyContent='space-between'  sx={{ mt: 'auto', mb: 2 }}>
      <Typography fontSize={18}>Total</Typography>
      <Typography fontSize={18}>{currencyBRLIntl(cartContext.totalPrice)}</Typography>
    </Stack>
  )
}