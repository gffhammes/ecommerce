import { Button, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Filter } from '../components/Products/FilterAndSorting/Filter'
import { MobileFilterDrawer } from '../components/Products/FilterAndSorting/MobileFilterDrawer'
import { SearchAndSort } from '../components/Products/FilterAndSorting/SearchAndSort'
import { ProductsList } from '../components/Products/ProductsList'
import { useBreakPoint } from '../hooks/useBreakPoint'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Drawer } from '../components/Common/Drawer'

type Props = {}

const Products = (props: Props) => {
  const { mdSize } = useBreakPoint();
  const [openFilterDrawer, setOpenFilterDrawer] = useState<boolean>(false);

  const handleOpenFilterDrawer = () => {
    setOpenFilterDrawer(true);
  }

  const handleCloseFilterDrawer = () => {
    setOpenFilterDrawer(false);
  }

  return (
    <>    
      <Container>
        <Stack direction='row' sx={{ width: '100%' }} spacing={4}>  
          {mdSize && <Filter />}
          <Stack component='main' spacing={2} sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
            <SearchAndSort />
            {!mdSize && <Button startIcon={<FilterAltIcon />} variant='outlined' onClick={handleOpenFilterDrawer}>Filtros</Button>}
            <ProductsList />
          </Stack>
        </Stack>
      </Container>
      {!mdSize &&
        <Drawer
          open={openFilterDrawer}
          onOpen={handleOpenFilterDrawer}
          onClose={handleCloseFilterDrawer}
          anchor='left'
          title='Filtros'
        >
          <Filter />
        </Drawer>
      }      
    </>
  )
}

export default Products