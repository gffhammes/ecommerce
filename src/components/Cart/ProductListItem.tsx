import { Avatar, Box, Divider,  ListItem, ListItemAvatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { getTruncate } from '../../helpers/getTruncate';
import { ICartItem } from '../../interfaces/Cart';
import { currencyBRLIntl } from '../../helpers/currencyBRLIntl';
import { CartItemButtons } from '../Common/CartItemButtons';

interface IProductListItemProps {
  cartItem: ICartItem;
}

export const ProductListItem = ({ cartItem: { product, quantity } }: IProductListItemProps) => {
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
            <Typography fontSize={14}>{currencyBRLIntl(product.price)} x {quantity}</Typography>
            <Typography fontSize={14} sx={{ mt: 1, color: '#767676' }} fontWeight={600}>{currencyBRLIntl(product.price * quantity)}</Typography>
          </Box>

          <CartItemButtons productId={product.id} />
        </Stack>
      </ListItem>
      <Divider component="li" sx={{ my: 2 }} />
    </>
  )
}