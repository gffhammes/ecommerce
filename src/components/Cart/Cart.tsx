import { Box, Button, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'
import { CartProductsList } from './CartProductsList';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface ICartProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Cart = ({ open, onClose, onOpen }: ICartProps) => {
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box sx={{ height: '100%', p: 5, width: '400px',display: 'flex', flexDirection: 'column' }}>
        <Typography color='primary.main' fontSize={12} fontWeight={600}>CARRINHO</Typography>

        <CartProductsList />

        <Button variant='contained' sx={{ mt: 'auto' }} endIcon={<ArrowRightAltIcon />} >Finalizar</Button>
      </Box>
    </SwipeableDrawer>
  )
}