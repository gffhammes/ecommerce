import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Cart } from '../Cart/Cart'
import { Header } from './Header'

export const DefaultLayout = () => {

  return (
    <>    
      <Stack sx={{ height: '100%', backgroundColor: '#ededed', overflowY: 'auto' }}>
        <Header />
        <Box sx={{ py: { xs: 5, md: 10 } }}>    
          <Outlet />
        </Box>
      </Stack>
      <Cart />
    </>
  )
}