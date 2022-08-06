import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/Cart/ProductContext';
import { ProductCard } from './ProductCard/ProductCard';

interface IProductsListProps {
}

export const ProductsList = (props: IProductsListProps) => {
  const productsContext = useContext(ProductsContext);

  if (productsContext.isFetching) {
    return <div>loading...</div>
  }
  
  if (!productsContext.filteredProducts || productsContext.filteredProducts.length === 0) {
    return (
      <Stack alignItems='center'>        
        <Box
          sx={{
            height: '30rem',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            component='img'
            src='/images/undraw_taken_re_yn20.svg'
            alt='Não encontrado'
            sx={{
              height: '100%',
              width: '100%',
            }}
          />
        </Box>
        <Typography lineHeight={1} textAlign='center' color='primary.main' fontSize={32} sx={{ mt: 4, mb: 1.5 }}>Nenhum produto encontrado</Typography>
        <Typography lineHeight={1} textAlign='center'>Se aplicou algum filtro, tente alterar os valores</Typography>
      </Stack>
    )
  }

  return (
    <Grid container spacing={2}>
      {productsContext.filteredProducts.map(product => (
        <Grid key={product.id} item xs={6} lg={4}>          
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}