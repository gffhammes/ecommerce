import { Avatar, Box, Divider, IconButton,  ListItem, ListItemAvatar, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { getTruncate } from '../../helpers/getTruncate';
import { CartContext } from '../../Contexts/Cart/CartContext';
import { ICartItem } from '../../interfaces/Cart';

interface IProductListItemProps {
  cartItem: ICartItem;
}

export const ProductListItem = ({ cartItem: { product, quantity } }: IProductListItemProps) => {
  const { removeProductFromCart } = useContext(CartContext);

  return (
    <>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar
            alt={product.title}
            src={product.image}
          />
        </ListItemAvatar>
        <Stack sx={{ width: '100%' }} direction='row' alignItems='center' justifyContent='space-between'>
          <Box>
            <Typography fontWeight={600}>{getTruncate(product.title, 20)}</Typography>
            <Typography fontSize={14}>R$ {product.price.toFixed(2)} x {quantity}</Typography>
            <Typography fontSize={14} sx={{ mt: 1, color: '#767676' }} fontWeight={600}>R$ {(product.price * quantity).toFixed(2)}</Typography>
          </Box>
          
          <IconButton sx={{ height: 'fit-content' }} onClick={() => removeProductFromCart(product.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </ListItem>
      <Divider component="li" sx={{ my: 2 }} />
    </>
  )
}