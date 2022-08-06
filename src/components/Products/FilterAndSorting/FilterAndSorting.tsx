import { Box, Button, SelectChangeEvent, Typography } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ProductsContext } from '../../../Contexts/Cart/ProductContext';
import { IFilter } from '../../../interfaces/Filter';
import { DatePicker } from './Inputs/DatePicker';
import { TextField } from './Inputs/TextField';

interface IFilterAndSortingProps {
}

export const FilterAndSorting = (props: IFilterAndSortingProps) => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");  
  const [minCreationDate, setMinCreationDate] = useState<Date | null>(null);
  const [maxCreationDate, setMaxCreationDate] = useState<Date | null>(null);  
  // const [priceSorting, setPriceSorting] = useState<PriceSorting>(PriceSorting.NO_SORTING);
  // const [creationDateSorting, setCreationDateSorting] = useState<CreationDateSorting>(CreationDateSorting.NO_SORTING);
  const productsContext = useContext(ProductsContext);

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
  
  // const handlePriceSortingChange = (e: SelectChangeEvent<string>) => {
  //   setPriceSorting((e.target.value as PriceSorting));
  // }
  
  // const handleCreationDateSortingChange = (e: SelectChangeEvent<string>) => {
  //   setCreationDateSorting((e.target.value as CreationDateSorting));
  // }

 
  return (
    <Box component='aside' sx={{ height: '50rem', flex: '15rem', flexShrink: 0, flexGrow: 0, position: 'sticky', top: 0, pt: 4 }}>
      <Typography fontSize={12} sx={{ color: '#adadad' }}>FILTRAR</Typography>
      <Box component='form' noValidate onSubmit={handleFilterSubmit}>
         <Box sx={{ mt: 4 }}>        
         <Typography fontWeight={500}>Preço</Typography>
          <TextField
            label='Mínimo'
            id="min"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <TextField
            label='Máximo'
            id="max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </Box>
        <Box sx={{ mt: 4 }}>        
          <Typography fontWeight={500}>Data de inclusão</Typography>
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
        </Box>
        {/* <Box sx={{ mt: 4 }}>        
          <Typography fontWeight={500}>Ordenar</Typography>
          <Autocomplete
            label='Preço'
            value={priceSorting}
            onChange={handlePriceSortingChange}
            options={Object.values(PriceSorting)}
          />
          <Autocomplete
            label='Data de inclusão'
            value={creationDateSorting}
            onChange={handleCreationDateSortingChange}
            options={Object.values(CreationDateSorting)}
          />
        </Box> */}
        <Box sx={{ mt: 4 }}>
          <Button fullWidth variant='outlined' type='submit' >Filtrar</Button>
        </Box>
      </Box>
    </Box>
  )
}