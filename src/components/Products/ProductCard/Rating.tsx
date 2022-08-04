import { Stack, Rating as MuiRating, Typography } from '@mui/material';
import React from 'react'

interface Props {
  rating: {
    rate: number;
    count: number;
  }
}

export const Rating = ({  
  rating: {
    rate,
    count,
  }
}: Props) => {
  return (
    <Stack direction='row' alignItems='center' spacing={1}>            
      <MuiRating name="read-only" value={rate} readOnly />
      <Typography lineHeight={1} sx={{ color: '#aaaaaa' }}>{count}</Typography>
    </Stack>
  )
}