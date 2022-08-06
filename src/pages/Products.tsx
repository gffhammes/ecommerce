import { Container, Stack } from '@mui/material'
import React from 'react'
import { Filter } from '../components/Products/FilterAndSorting/Filter'
import { SearchAndSort } from '../components/Products/FilterAndSorting/SearchAndSort'
import { ProductsList } from '../components/Products/ProductsList'
import { useBreakPoint } from '../hooks/useBreakPoint'

type Props = {}

const Products = (props: Props) => {
  const { mdSize } = useBreakPoint();


  return (
    <Container>
      <Stack direction='row' sx={{ width: '100%' }} spacing={4}>        
        {mdSize && <Filter />}
        <Stack component='main' spacing={2} sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
          <SearchAndSort />
          <ProductsList />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Products