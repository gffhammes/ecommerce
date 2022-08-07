import { Box, IconButton, Stack, SwipeableDrawer, SwipeableDrawerProps, Typography } from '@mui/material';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface IDrawerProps extends SwipeableDrawerProps {
  title: string;
}

export const Drawer = ({ open, onClose, onOpen, anchor='left', children, title, ...props }: SwipeableDrawerProps) => {
  return (
    <SwipeableDrawer
      {...props}
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={{ width: 'min(100%, 25rem)' }}
    >
      <Box sx={{ height: '100%', p: 5, width: 'min(100%, 25rem)', display: 'flex', flexDirection: 'column' }}>        
        <Stack direction='row' justifyContent='space-between' alignItems='center'>          
          <Typography color='primary.main' textAlign='center' fontWeight={600}>{title?.toUpperCase()}</Typography>
          <IconButton size='small' color='primary' onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {children}
      </Box>
    </SwipeableDrawer>
  )
}