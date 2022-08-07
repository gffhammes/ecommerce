import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/Products/ProductsContext';
import { NoProduct } from './NoProduct';
import { ProductCard } from './ProductCard/ProductCard';

interface IProductsListProps {
}

export const ProductsList = (props: IProductsListProps) => {
  const productsContext = useContext(ProductsContext);

  if (productsContext.isFetching) {
    return <div>loading...</div>
  }
  
  if (!productsContext.filteredProducts || productsContext.filteredProducts.length === 0) {
    return <NoProduct />
  }

  return (
    <Box sx={{ pt: 2 }}>      
      <Grid container spacing={2}>
        {productsContext.filteredProducts.map(product => (
          <Grid key={product.id} item xs={12} sm={6} lg={4}>          
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}