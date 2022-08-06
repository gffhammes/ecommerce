import { Box, Button, IconButton, Stack, SwipeableDrawer, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartProductsList } from './CartProductsList';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/Cart/CartContext';
import CloseIcon from '@mui/icons-material/Close';

interface ICartProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Cart = ({ open, onClose, onOpen }: ICartProps) => {
  const cartContext = useContext(CartContext);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box sx={{ height: '100%', p: 5, width: 'min(100vw, 25rem)', display: 'flex', flexDirection: 'column' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>          
          <Typography color='primary.main' fontSize={12} textAlign='center' fontWeight={600}>CARRINHO</Typography>

          <IconButton size='small' onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <CartProductsList />

        <Button disabled={cartContext.cart.length === 0} component={Link} to='/checkout' onClick={onClose} variant='contained' sx={{ mt: 'auto' }} endIcon={<ArrowRightAltIcon />} >Checkout</Button>
      </Box>
    </SwipeableDrawer>
  )
}