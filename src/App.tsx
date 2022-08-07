import React from 'react';
import { RoutesComponent } from './Routes';
import { CartContextProvider } from './Contexts/Cart/CartContext';
import { createFakeServer } from './helpers/createFakeServer';
import { ProductsContextProvider } from './Contexts/Products/ProductsContext';

createFakeServer();

function App() {
  return (
    <ProductsContextProvider>      
      <CartContextProvider>
        <RoutesComponent />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
