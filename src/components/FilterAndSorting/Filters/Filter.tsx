import { Box, Button, Stack, Typography } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { ProductsContext } from '../../../Contexts/Products/ProductsContext';
import { useBreakPoint } from '../../../hooks/useBreakPoint';
import { IFilter } from '../../../interfaces/Filter';
import { DatePicker } from '../Inputs/DatePicker';
import { FinancialTextField } from '../Inputs/TextField';
import { FilterBox } from './FilterBox';

export const Filter = () => {
  const { filtersAndSorting, ...productsContext } = useContext(ProductsContext);
  const [minPrice, setMinPrice] = useState<string>(filtersAndSorting.minPrice);
  const [maxPrice, setMaxPrice] = useState<string>(filtersAndSorting.maxPrice);  
  const [minCreationDate, setMinCreationDate] = useState<Date | null>(filtersAndSorting.minCreationDate);
  const [maxCreationDate, setMaxCreationDate] = useState<Date | null>(filtersAndSorting.maxCreationDate);  
  const { mdSize } = useBreakPoint();

  const handleFilterSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const filters: IFilter = {
      minPrice,
      maxPrice,
      minCreationDate,
      maxCreationDate,
    }

    productsContext.handleFilter(filters)
  }
  
  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  }
  
  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  }
  
  const handleMinCreationDateChange = (newValue: Date | null) => {
    setMinCreationDate(newValue);
  }
  
  const handleMaxCreationDateChange = (newValue: Date | null) => {
    setMaxCreationDate(newValue);
  }

  const PriceFilterFields = (
    <>
      <FinancialTextField
        label='Mínimo'
        id="min"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <FinancialTextField
        label='Máximo'
        id="max"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
    </>
  )

  
  const CreationDateFilterFields = (
    <>
      <DatePicker
        label='De'
        value={minCreationDate}
        onChange={handleMinCreationDateChange}        
      />
      <DatePicker
        label='Até'
        value={maxCreationDate}
        onChange={handleMaxCreationDateChange}
      />
    </>
  )
 
  return (
    <Box component={mdSize ? 'aside' : 'div'} sx={{ flex: '15rem', flexShrink: 0, flexGrow: 0, pt: { xs: 0, md: 10 } }}>
      <Stack spacing={4} component='form' noValidate onSubmit={handleFilterSubmit}>
        <Typography fontWeight={600} fontSize={10} sx={{ color: '#777777' }}>FILTRAR</Typography>
        <FilterBox
          title="Preço"
          fields={PriceFilterFields}
        />
        <FilterBox
          title="Data de inclusão"
          fields={CreationDateFilterFields}
        />
        <Button fullWidth variant='contained' type='submit' >Filtrar</Button>
      </Stack>
    </Box>
  )
}