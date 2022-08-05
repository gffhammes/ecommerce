import { Box, Button, Container, Grid, IconButton, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../Contexts/Cart/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

type Props = {}

export const Checkout = (props: Props) => {
  const cartContext = useContext(CartContext);

  return (
    <Container>
      <Typography variant='h1' fontSize={32}>Checkout</Typography>
      <Typography>Confira seus produtos e finalize sua compra</Typography>
      <Paper sx={{ p: 4 }}>
        {cartContext.cart.length > 0 &&
          <List>
            {cartContext.cart.map(cartItem => (
              <ListItem key={cartItem.product.id} disablePadding  >
                <Stack sx={{ width: '100%' }} direction='row' justifyContent='space-between' alignItems='center' spacing={4}>
                  <Box 
                    sx={{
                      height: '10rem',
                      aspectRatio: '1 / 1',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      component='img'
                      src={cartItem.product.image}
                      alt={cartItem.product.title}
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                  <Typography sx={{ maxWidth: '30ch', flex: 1 }}>{cartItem.product.title}</Typography>
                  <Typography sx={{ flex: 1 }}>R$ {cartItem.product.price.toFixed(2)}</Typography>
                  <Typography sx={{ flex: 1 }}>{cartItem.quantity}</Typography>
                  <Typography sx={{ flex: 1 }}>R$ {(cartItem.quantity * cartItem.product.price).toFixed(2)}</Typography>
                  <IconButton sx={{ height: 'fit-content' }} onClick={() => cartContext.removeProductFromCart(cartItem.product.id)}>
                      <DeleteIcon />
                  </IconButton>
                </Stack>
              </ListItem>
            ))}
          </List>
        }
        {cartContext.cart.length === 0 &&
          <Stack direction='row' alignItems='center' spacing={4} sx={{ width: 'fit-content', m: 'auto' }}>
            <Box 
              sx={{
                height: '20rem',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                m: 'auto'
              }}
            >
              <Box
                component='img'
                src={'/images/undraw_empty_re_opql.svg'}
                alt='Vazio'
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
            
            <Box >              
              <Typography fontSize={24} color='primary.main'>Carrinho vazio</Typography>
              <Typography sx={{ mb: 4, mt: 1 }}>Volte para a home e continue comprando!</Typography>
              <Link to='/'>
                <Button variant='contained'>Home</Button>
              </Link>
            </Box>
          </Stack>
        }
      </Paper>
    </Container>
  )
}