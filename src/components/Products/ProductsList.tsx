import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { ProductCard } from './ProductCard/ProductCard';

interface IProductsListProps {
  products: any | null;
  loading: boolean;
}

export const ProductsList = ({ products, loading }: IProductsListProps) => {

  if (loading) {
    return <div>loading...</div>
  }
  
  if (!products || products.length === 0) {
    return (
      <Stack alignItems='center' spacing={4}>        
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
        <Typography textAlign='center' color='primary.main' fontSize={32}>Nenhum produto encontrado</Typography>
        <Typography textAlign='center' >Se aplicou algum filtro, tente alterar os valores</Typography>
      </Stack>
    )
  }

  return (
    <Grid container spacing={2}>
      {products.map((product: any) => (
        <Grid key={product.id} item xs={6} lg={4}>          
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}