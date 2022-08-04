import { Container, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FilterAndSorting } from '../components/FilterAndSorting/FilterAndSorting'
import { ProductsList } from '../components/Products/ProductsList'
import { SearchBar } from '../components/Products/SearchBar'
import { useFetch } from '../hooks/useFetch'

type Props = {}

const Products = (props: Props) => {
  // const { data, isFetching, error } = useFetch("/products/category/electronics");
  const { data, isFetching, error } = useFetch("/products");

  console.log(data)

  return (
    <Container>
      <Stack direction='row' sx={{ width: '100%' }} spacing={4}>        
        <FilterAndSorting />
        <Stack component='main' sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
          {/* <SearchBar />           */}
          <ProductsList products={data} loading={isFetching} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Products