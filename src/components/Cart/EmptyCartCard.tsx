import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface IEmptyCartCardProps {}

export const EmptyCartCard = (props: IEmptyCartCardProps) => {
  return (
    <Stack alignItems='center' spacing={4}>      
      <Box 
        sx={{
          width: '70%',
          aspectRatio: '1 / 1',
          overflow: 'hidden'
        }}
      >
        <Box
          component='img'
          src={'/images/undraw_empty_cart_co35.svg'}
          alt='Carrinho vazio'
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>
      <Typography textAlign='center' fontSize={24}>Carrinho vazio</Typography>
    </Stack>
  )
}