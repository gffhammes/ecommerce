import React, { useState } from 'react';
import { Header } from './components/Common/Header';
import { Box, Stack } from '@mui/material';
import { RoutesComponent } from './Routes';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './Contexts/Cart/CartContext';
import { createFakeServer } from './helpers/createFakeServer';
import { ProductsContextProvider } from './Contexts/Products/ProductsContext';

createFakeServer();

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleOpenCart = () => {
    setCartOpen(true);
  }
  
  const handleCloseCart = () => {
    setCartOpen(false);
  }

  return (
    <ProductsContextProvider>      
      <CartContextProvider>
        <>      
          <Stack sx={{ height: '100%', backgroundColor: '#ededed', overflowY: 'auto' }}>
            <Header handleOpenCart={handleOpenCart} />
            <Box sx={{ py: { xs: 5, md: 10 } }}>        
              <RoutesComponent />
            </Box>
          </Stack>
          <Cart open={cartOpen} onClose={handleCloseCart} onOpen={handleOpenCart}/>
        </>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
