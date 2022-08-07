import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react'

interface IFilterBoxProps {
  title: string;
  fields: ReactNode;
}

export const FilterBox = ({ title, fields }: IFilterBoxProps) => {
  return (
    <Box>
      <Typography fontWeight={500}>{title}</Typography>
      {fields}
    </Box>
  )
}