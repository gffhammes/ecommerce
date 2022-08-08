import { Box, Divider, Grid, ListItem, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'
import { ICartItem } from '../../interfaces/Cart';
import { getTruncate } from '../../helpers/getTruncate';
import { currencyBRLIntl } from '../../helpers/currencyBRLIntl';
import { CartItemButtons } from '../Common/CartItemButtons';

interface ICheckoutListItemProps {
  cartItem: ICartItem;
}

const sxImage: SxProps<Theme> = {
  aspectRatio: '1 / 1',
  width: '100%',
  maxWidth: '10rem',
  objectFit: 'contain'
}

export const CheckoutListItem = ({ cartItem }: ICheckoutListItemProps) => {

  return (
    <>    
      <ListItem disablePadding>
        <Grid container sx={{ width: '100%' }} spacing={2} justifyContent='space-between' alignItems='center'>
          <Grid item xs={3} sm={3}>
            <Box
              component='img'
              src={cartItem.product.image}
              alt={cartItem.product.title}
              sx={sxImage}
            />
          </Grid>
          <Grid item xs={9} sm={4}>
            <Typography>{getTruncate(cartItem.product.title, 30)}</Typography>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Stack direction={{ xs: 'column', md: 'row' }}>              
              <Typography sx={{ flex: 1 }}>{currencyBRLIntl(cartItem.product.price)}</Typography>          
              <Typography sx={{ flex: .5 }}>x {cartItem.quantity}</Typography>   
              <Typography sx={{ flex: 1 }} fontWeight={600}>{currencyBRLIntl(cartItem.quantity * cartItem.product.price)}</Typography>       
            </Stack>
          </Grid>
          <Grid item xs={2} sm={1}>
            <CartItemButtons productId={cartItem.product.id} />
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" sx={{ my: 2 }} />
    </>
  )
}