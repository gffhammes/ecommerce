import { Box, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'

const sxImageWrapper: SxProps<Theme> = {
  width: '70%',
  aspectRatio: '1 / 1',
  overflow: 'hidden'
}

const sxImage: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  objectFit: 'contain'
}

export const EmptyCart = () => {
  return (
    <Stack alignItems='center' spacing={4}>      
      <Box sx={sxImageWrapper}>
        <Box
          component='img'
          src={'/images/undraw_empty_cart_co35.svg'}
          alt='Carrinho vazio'
          sx={sxImage}
        />
      </Box>
      <Typography textAlign='center' fontSize={24}>Carrinho vazio</Typography>
    </Stack>
  )
}