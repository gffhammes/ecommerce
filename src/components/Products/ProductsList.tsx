import { Box, Grid, Skeleton} from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/Products/ProductsContext';
import { NoProduct } from './NoProduct';
import { ProductCard } from './ProductCard/ProductCard';

interface IProductsListProps {
}

export const ProductsList = (props: IProductsListProps) => {
  const productsContext = useContext(ProductsContext);

  if (productsContext.isFetching) {
    return (        
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5].map(item => (
          <Grid key={item} item xs={12} sm={6} lg={4}>          
            <Skeleton variant="rectangular" width='100%' height='23rem' />
          </Grid>
        ))}
      </Grid>
    )
  }
  
  if (!productsContext.filteredAndSortedProducts || productsContext.filteredAndSortedProducts.length === 0) {
    return <NoProduct />
  }

  return (
    <Box sx={{ pt: 2 }}>      
      <Grid container spacing={2}>
        {productsContext.filteredAndSortedProducts.map(product => (
          <Grid key={product.id} item xs={12} sm={6} lg={4}>          
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}