import { Container, Stack } from '@mui/material'
import React from 'react'
import { Filter } from '../components/FilterAndSorting/Filters/Filter'
import { MobileFilterCollapse } from '../components/FilterAndSorting/Filters/MobileFilterCollapse'
import { SearchAndSort } from '../components/FilterAndSorting/SearchAndSort/SearchAndSort'
import { ProductsList } from '../components/Products/ProductsList'
import { useBreakPoint } from '../hooks/useBreakPoint'

const Products = () => {
  const { mdSize } = useBreakPoint();

  return (
    <>    
      <Container>
        <Stack direction='row' sx={{ width: '100%' }} spacing={4}>  
          {mdSize && <Filter />}
          <Stack component='main' spacing={2} sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
            <SearchAndSort />            
            {!mdSize && <MobileFilterCollapse />}    
            <ProductsList />
          </Stack>
        </Stack>
      </Container>  
    </>
  )
}

export default Products