import { Container, Stack } from '@mui/material'
import React from 'react'
import { Filter } from '../components/Products/FilterAndSorting/Filter'
import { SearchAndSort } from '../components/Products/FilterAndSorting/SearchAndSort'
import { ProductsList } from '../components/Products/ProductsList'

type Props = {}

const Products = (props: Props) => {
  return (
    <Container>
      <Stack direction='row' sx={{ width: '100%' }} spacing={4}>        
        <Filter />
        <Stack component='main' spacing={2} sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
          <SearchAndSort />
          <ProductsList />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Products