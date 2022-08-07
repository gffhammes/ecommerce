import React from 'react';
import { RoutesComponent } from './Routes';
import { CartContextProvider } from './Contexts/Cart/CartContext';
import { createFakeServer } from './helpers/createFakeServer';
import { ProductsContextProvider } from './Contexts/Products/ProductsContext';
import { SnackbarProvider } from 'notistack';

createFakeServer();

function App() {
  return (
    <SnackbarProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <RoutesComponent />
        </CartContextProvider>
      </ProductsContextProvider>
    </SnackbarProvider>
  );
}

export default App;
