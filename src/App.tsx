import React from 'react';
import { RoutesComponent } from './Routes';
import { CartContextProvider } from './Contexts/Cart/CartContext';
import { createFakeServer } from './helpers/createFakeServer';
import { ProductsContextProvider } from './Contexts/Products/ProductsContext';
import { SnackbarProvider } from 'notistack';
import { SnackbarCloseButton } from './components/Common/SnackbarCloseButton';

createFakeServer();

function App() {
  return (
    <SnackbarProvider action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
      <ProductsContextProvider>
        <CartContextProvider>
          <RoutesComponent />
        </CartContextProvider>
      </ProductsContextProvider>
    </SnackbarProvider>
  );
}

export default App;
