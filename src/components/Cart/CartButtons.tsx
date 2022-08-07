import { Button, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/Cart/CartContext';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const CartButtons = () => {
  const cartContext = useContext(CartContext);

  return (
    <Stack direction='row' spacing={1}>
      <Button fullWidth disabled={cartContext.isEmpty} variant='outlined' onClick={cartContext.clearCart}>Limpar</Button>
      <Button fullWidth disabled={cartContext.isEmpty} component={Link} to='/checkout' onClick={cartContext.handleCloseCart} variant='contained'endIcon={<ArrowRightAltIcon />} >Checkout</Button>
    </Stack>
  )
}