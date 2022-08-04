import { Grid } from '@mui/material';
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
    return <div>No products to show</div>
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