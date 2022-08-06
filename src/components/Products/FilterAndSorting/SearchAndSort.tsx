import { Box, InputAdornment, SelectChangeEvent, Stack } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState, useTransition } from 'react'
import { TextField } from './Inputs/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { Select } from './Inputs/Select';
import { Sorting } from '../../../interfaces/Sorting';
import { ProductsContext } from '../../../Contexts/Products/ProductsContext';

export const SearchAndSort = () => {
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<Sorting>(Sorting.NO_SORTING);
  const productsContext= useContext(ProductsContext);

  useEffect(() => {
    productsContext.handleSorting(sorting);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting])

  
  useEffect(() => {
    productsContext.handleSearch(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);  
  }
  
  const handleSortingChange = (e: SelectChangeEvent<string>) => {
    setSorting((e.target.value as Sorting));
  }

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>      
      <Box sx={{ flexGrow: 1 }}>        
        <TextField
          value={search}
          onChange={handleSearchChange}
          placeholder='Buscar'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ flexShrink: 1, flexBasis: { xs: 'unset', md: '12rem' } }}>        
        <Select
          label='Ordenar'
          value={sorting}
          onChange={handleSortingChange}
          options={Object.values(Sorting)}
        />
      </Box>
    </Stack>
  )
}