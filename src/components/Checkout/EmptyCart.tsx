import { Box, Button, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const sxImageWrapper: SxProps<Theme> = {
  maxWidth: '20rem',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  m: 'auto'
}

const sxImage: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  objectFit: 'contain'
}

export const EmptyCart = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4} sx={{ width: 'fit-content', m: 'auto' }}>
      <Box sx={sxImageWrapper}>
        <Box
          component='img'
          src={'/images/undraw_empty_re_opql.svg'}
          alt='Vazio'
          sx={sxImage}
        />
      </Box>
      
      <Box>
        <Typography fontSize={24} color='primary.main'>Carrinho vazio</Typography>
        <Typography sx={{ mb: 4, mt: 1 }}>Volte para a home e continue comprando!</Typography>
        <Link to='/'>
          <Button variant='contained'>Home</Button>
        </Link>
      </Box>
    </Stack>
  )
}