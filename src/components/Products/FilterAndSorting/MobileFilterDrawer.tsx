import { Box, SwipeableDrawer } from '@mui/material'
import React from 'react'
import { Filter } from './Filter'

interface IMobileFilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const MobileFilterDrawer = ({ open, onClose, onOpen }: IMobileFilterDrawerProps) => {
  return (
    <SwipeableDrawer
      anchor={'left'}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box sx={{ height: '100%', p: 5, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Filter />
      </Box>
    </SwipeableDrawer>
  )
}