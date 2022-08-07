import { Box, Divider, Grid, IconButton, ListItem, Stack, SxProps, Theme, Typography } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ICartItem } from '../../interfaces/Cart';
import { CartContext } from '../../Contexts/Cart/CartContext';
import { getTruncate } from '../../helpers/getTruncate';

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
  const cartContext = useContext(CartContext);

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
              <Typography sx={{ flex: 1 }}>R$ {cartItem.product.price.toFixed(2)}</Typography>          
              <Typography sx={{ flex: .5 }}>x {cartItem.quantity}</Typography>   
              <Typography sx={{ flex: 1 }} fontWeight={600}>R$ {(cartItem.quantity * cartItem.product.price).toFixed(2)}</Typography>       
            </Stack>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton sx={{ height: 'fit-content', flexBasis: 'fit-content', flexGrow: 0 }} onClick={() => cartContext.removeProductFromCart(cartItem.product.id)}>
                <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" sx={{ my: 2 }} />
    </>
  )
}