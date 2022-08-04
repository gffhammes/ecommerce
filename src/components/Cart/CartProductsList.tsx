import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart/CartContext';
import { ProductsContext } from '../../Contexts/Cart/ProductContext';

interface ICartProductsListProps {

}

export const CartProductsList = (props: ICartProductsListProps) => {
  const cartContext = useContext(CartContext);
  const productsContext = useContext(ProductsContext);

  return (
    <Box>
      <Typography variant='h5'>Produtos</Typography>
      {cartContext.cart.map(cartItem => {
        const product = productsContext.getProductById(cartItem.id);
        return (
          <>        
            <Typography>{product.title} x {cartItem.quantity}</Typography>
          </>
        )
      })}
    </Box>
  )
}