import { Box, Stack, SxProps, Theme, Typography } from '@mui/material'
import React from 'react'

const sxImageWrapper: SxProps<Theme> = {
  height: '30rem',
  width: '100%',
  overflow: 'hidden',
  p: {
    xs: 2,
    md: 5,
  },
}

const sxImage: SxProps<Theme> = {
  height: '100%',
  width: '100%',
}

export const NoProduct = () => {
  return (
    <Stack alignItems='center'>        
      <Box sx={sxImageWrapper}>
        <Box
          component='img'
          src='/images/undraw_taken_re_yn20.svg'
          alt='Não encontrado'
          sx={sxImage}
        />
      </Box>
      <Typography lineHeight={1} textAlign='center' color='primary.main' fontSize={32} sx={{ mt: 4, mb: 1.5 }}>Nenhum produto encontrado</Typography>
      <Typography lineHeight={1} textAlign='center'>Se aplicou algum filtro, tente alterar os valores</Typography>
    </Stack>
  )
}