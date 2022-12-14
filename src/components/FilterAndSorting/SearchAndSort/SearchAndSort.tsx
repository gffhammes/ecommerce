import { Box, Stack } from '@mui/material';
import React from 'react'
import { Search } from './Search';
import { Sort } from './Sort';

export const SearchAndSort = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>      
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Search />
      </Box>
      <Box sx={{ flexShrink: 1, flexBasis: { xs: 'unset', md: '12rem' } }}>        
        <Sort />
      </Box>
    </Stack>
  )
}