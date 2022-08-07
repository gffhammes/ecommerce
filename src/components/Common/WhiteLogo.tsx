import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export const WhiteLogo = (props: Props) => {
  return (      
    <Stack direction='row' spacing={1} alignItems='center'>     
      <Box
        component='img'
        src="/images/logo.svg"
        sx={{
          width: '1.75rem',
          aspectRatio: '1 / 1'
        }}
      />       
      <Typography variant="h6">
        Fake Shop
      </Typography>
    </Stack>
  )
}