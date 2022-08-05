import { Box, SelectChangeEvent, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { CreationDateSorting, PriceSorting } from '../../interfaces/FilterAndSorting';
import { Autocomplete } from './Autocomplete'
import { DatePicker } from './DatePicker'
import { TextField } from './TextField';

interface IFilterAndSortingProps {
  handleFilter: (filters: any) => void;
}


export const FilterAndSorting = ({ handleFilter }: IFilterAndSortingProps) => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");  
  const [minCreationDate, setMinCreationDate] = useState<Date | null>(null);
  const [maxCreationDate, setMaxCreationDate] = useState<Date | null>(null);  
  const [priceSorting, setPriceSorting] = useState<PriceSorting>(PriceSorting.NO_SORTING);
  const [creationDateSorting, setCreationDateSorting] = useState<CreationDateSorting>(CreationDateSorting.NO_SORTING);

  useEffect(() => {
    const filter = {
      minPrice,
      maxPrice,
      minCreationDate,
      maxCreationDate,
      priceSorting,
      creationDateSorting,
    }

    handleFilter(filter);
  }, [minPrice, maxPrice, minCreationDate, maxCreationDate, priceSorting, creationDateSorting, handleFilter])

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
  
  const handlePriceSortingChange = (e: SelectChangeEvent<string>) => {
    setPriceSorting((e.target.value as PriceSorting));
  }
  
  const handleCreationDateSortingChange = (e: SelectChangeEvent<string>) => {
    setCreationDateSorting((e.target.value as CreationDateSorting));
  }

  return (
    <Box component='aside' sx={{ height: '50rem', flex: '15rem', flexShrink: 0, flexGrow: 0, position: 'sticky', top: 0, pt: 4 }}>
      <Typography fontSize={12} sx={{ color: '#adadad' }}>FILTRAR</Typography>
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
      <Box sx={{ mt: 4 }}>        
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
      </Box>
    </Box>
  )
}