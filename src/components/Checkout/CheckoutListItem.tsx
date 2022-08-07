import { Box, IconButton, ListItem, Stack, SxProps, Theme, Typography } from '@mui/material'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ICartItem } from '../../interfaces/Cart';
import { CartContext } from '../../Contexts/Cart/CartContext';
import { getTruncate } from '../../helpers/getTruncate';

interface ICheckoutListItemProps {
  cartItem: ICartItem;
}

const sxImageWrapper: SxProps<Theme> = {
  height: '10rem',
  aspectRatio: '1 / 1',
  overflow: 'hidden'
}

const sxImage: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  objectFit: 'contain'
}

export const CheckoutListItem = ({ cartItem }: ICheckoutListItemProps) => {
  const cartContext = useContext(CartContext);

  return (
    <ListItem disablePadding  >
      <Stack sx={{ width: '100%' }} direction='row' justifyContent='space-between' alignItems='center' spacing={4}>
        <Box sx={sxImageWrapper}>
          <Box
            component='img'
            src={cartItem.product.image}
            alt={cartItem.product.title}
            sx={sxImage}
          />
        </Box>
        <Typography sx={{ maxWidth: '30ch', flex: 2 }}>{getTruncate(cartItem.product.title, 30)}</Typography>
        <Typography sx={{ flex: 1 }}>R$ {cartItem.product.price.toFixed(2)}</Typography>
        <Typography sx={{ flex: .5 }}>{cartItem.quantity}</Typography>
        <Typography sx={{ flex: 1 }}>R$ {(cartItem.quantity * cartItem.product.price).toFixed(2)}</Typography>
        <IconButton sx={{ height: 'fit-content', flexBasis: 'fit-content', flexGrow: 0 }} onClick={() => cartContext.removeProductFromCart(cartItem.product.id)}>
            <DeleteIcon />
        </IconButton>
      </Stack>
    </ListItem>
  )
}