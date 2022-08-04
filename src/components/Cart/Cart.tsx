import { SwipeableDrawer } from '@mui/material'
import React from 'react'

interface ICartProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Cart = ({ open, onClose, onOpen }: ICartProps) => {
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      {"testttt"}
    </SwipeableDrawer>
  )
}