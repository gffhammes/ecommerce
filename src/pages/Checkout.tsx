import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CheckoutList } from '../components/Checkout/CheckoutList';

type Props = {}

export const Checkout = (props: Props) => {

  return (
    <Container>
      <Stack spacing={2} sx={{ mb: 5 }}>        
        <Typography variant='h1' fontSize={32}>Checkout</Typography>
        <Typography>Confira seus produtos e finalize sua compra</Typography>
      </Stack>
      <CheckoutList />
    </Container>
  )
}