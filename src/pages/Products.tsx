import { Container, Stack } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FilterAndSorting } from '../components/FilterAndSorting/FilterAndSorting'
import { getRandomDate } from '../components/helpers/getRandomDate'
import { CreationDateSorting, PriceSorting } from '../components/interfaces/FilterAndSorting'
import { ProductsList } from '../components/Products/ProductsList'
import { SearchBar } from '../components/Products/SearchBar'
import { useFetch } from '../hooks/useFetch'

type Props = {}

const Products = (props: Props) => {
  const { data, isFetching, error } = useFetch("/products");
  const [filteredProducts, setFilteredProducts] = useState<any>()

  useEffect(() => {
    if (!data) return;
    setFilteredProducts(data);
  }, [data])

  const handleFilter = useCallback((filters: any) => {
    const {
      minPrice,
      maxPrice,
      minCreationDate,
      maxCreationDate,
      priceSorting,
      creationDateSorting,
    } = filters;

    let newProducts = data ? [...(data as any[])] : [];

    if (minPrice) {
      newProducts = newProducts.filter(product => product.price >= minPrice);
    }
    
    if (maxPrice) {
      newProducts = newProducts.filter(product => product.price <= maxPrice);
    }
    
    if (minCreationDate) {
      newProducts = newProducts.filter(product => new Date(product.createdAt) >= minCreationDate);
    }
    
    if (maxCreationDate) {
      newProducts = newProducts.filter(product => new Date(product.createdAt) <= maxCreationDate);
    }

    if (priceSorting === PriceSorting.MORE_EXPENSIVE) {
      newProducts.sort((productA, productB) => productB.price - productA.price);
    } else if (priceSorting === PriceSorting.CHEAPER) {
      newProducts.sort((productA, productB) => productA.price - productB.price);
    }

    if (creationDateSorting === CreationDateSorting.OLDER) {
      newProducts.sort((productA, productB) => Number(new Date(productA.createdAt)) - Number(new Date(productB.createdAt)));
    } else if (creationDateSorting === CreationDateSorting.NEWER) {
      newProducts.sort((productA, productB) => Number(new Date(productB.createdAt)) - Number(new Date(productA.createdAt)));
    }

    setFilteredProducts(newProducts);
  }, [data])

  return (
    <Container>
      <Stack direction='row' sx={{ width: '100%' }} spacing={4}>        
        <FilterAndSorting handleFilter={handleFilter} />
        <Stack component='main' sx={{ flexBasis: 'max-content', flexGrow: 1 }}>
          {/* <SearchBar />           */}
          <ProductsList products={filteredProducts} loading={isFetching} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Products