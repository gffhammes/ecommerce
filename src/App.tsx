import React, { useState } from 'react';
import logo from './logo.svg';
import { Header } from './components/Common/Header';
import { Box, Stack } from '@mui/material';
import { RoutesComponent } from './Routes';
import { Cart } from './components/Cart/Cart';

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleOpenCart = () => {
    setCartOpen(true);
  }
  
  const handleCloseCart = () => {
    setCartOpen(false);
  }

  return (
    <>    
      <Stack sx={{ height: '100%', backgroundColor: '#ededed', overflowY: 'scroll' }}>
        <Header handleOpenCart={handleOpenCart} />
        <Box sx={{ py: 10 }}>        
          <RoutesComponent />
        </Box>
      </Stack>
      <Cart open={cartOpen} onClose={handleCloseCart} onOpen={handleOpenCart}/>
    </>
  );
}

export default App;
