import { IconButton, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from '../../Contexts/Cart/CartContext';

type Props = {}

export const CartHeader = (props: Props) => {
  const cartContext = useContext(CartContext);

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>          
      <Typography color='primary.main' textAlign='center' fontWeight={600}>CARRINHO</Typography>

      <IconButton size='small' color='primary' onClick={cartContext.handleCloseCart}>
        <CloseIcon />
      </IconButton>
    </Stack>
  )
}