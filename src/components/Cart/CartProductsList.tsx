import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';
import { ProductsContext } from '../../Contexts/Products/ProductsContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { EmptyCartCard } from './EmptyCartCard';
import { CartProductCard } from './CartProductCard';

interface ICartProductsListProps {

}

export const CartProductsList = (props: ICartProductsListProps) => {
  const cartContext = useContext(CartContext);

  return (
    <Box sx={{ height: '100%', my: 5, overflowY: 'auto' }}>
      {cartContext.cart.length > 0 &&
        <>
          <List sx={{ width: '100%' }}>
            {cartContext.cart.map(cartItem => {
              return (
                <CartProductCard
                  key={cartItem.product.id}
                  product={cartItem.product}
                  quantity={cartItem.quantity}
                />
              )
            })}
          </List>
          <Stack direction='row' justifyContent='space-between'>
              <Typography fontSize={18}>Total</Typography>
              <Typography fontSize={18}>R$ {cartContext.totalPrice.toFixed(2)}</Typography>
          </Stack>
        </>
      }
      {cartContext.cart.length === 0 && <EmptyCartCard />}
    </Box>
  )
}