import { Container, Stack } from '@mui/material'
import React from 'react'
import { FilterAndSorting } from '../components/Products/FilterAndSorting/FilterAndSorting'
import { ProductsList } from '../components/Products/ProductsList'
import { SearchBar } from '../components/Products/SearchBar'

type Props = {}

const Products = (props: Props) => {
  return (
    <Container>
      <Stack direction='row' sx={{ width: '100%' }} spacing={4}>        
        <FilterAndSorting />
        <Stack component='main' sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
          {/* <SearchBar />           */}
          <ProductsList />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Products