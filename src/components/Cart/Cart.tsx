import { Box, Button, IconButton, Stack, SwipeableDrawer, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartProductsList } from './CartProductsList';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/Cart/CartContext';
import CloseIcon from '@mui/icons-material/Close';


export const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={cartContext.open}
      onClose={cartContext.handleCloseCart}
      onOpen={cartContext.handleOpenCart}
    >
      <Box sx={{ height: '100%', p: 5, width: 'min(100vw, 25rem)', display: 'flex', flexDirection: 'column' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>          
          <Typography color='primary.main' textAlign='center' fontWeight={600}>CARRINHO</Typography>

          <IconButton size='small' color='primary' onClick={cartContext.handleCloseCart}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <CartProductsList />

        <Button disabled={cartContext.isEmpty} component={Link} to='/checkout' onClick={cartContext.handleCloseCart} variant='contained' sx={{ mt: 'auto' }} endIcon={<ArrowRightAltIcon />} >Checkout</Button>
      </Box>
    </SwipeableDrawer>
  )
}