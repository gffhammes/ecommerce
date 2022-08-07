import { Button, List, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';
import { currencyBRLIntl } from '../../helpers/currencyBRLIntl';
import { CheckoutListItem } from './CheckoutListItem';
import { EmptyCart } from './EmptyCart';

export const CheckoutList = () => {
  const cartContext = useContext(CartContext);

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: 4 }}>
        {cartContext.isEmpty
          ? <EmptyCart />
          : <Stack component={List} spacing={2}>
              {cartContext.cart.map(cartItem => (
                <CheckoutListItem key={cartItem.product.id} cartItem={cartItem} />
              ))}
            </Stack>
        }
      </Paper>
      <Stack direction='row' justifyContent={{ xs: 'space-between', sm: 'flex-end' }} alignItems='center' spacing={4}>
        <Typography variant="h5">{currencyBRLIntl(cartContext.totalPrice)}</Typography>
        <Button disabled={cartContext.isEmpty} variant='contained' onClick={cartContext.handleCheckout}>Finalizar compra</Button>
      </Stack>
    </Stack>
  )
}