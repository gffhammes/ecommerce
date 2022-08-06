import { Box, InputAdornment, SelectChangeEvent, Stack } from '@mui/material';
import React, { ChangeEvent, useState } from 'react'
import { TextField } from './Inputs/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { Select } from './Inputs/Select';
import { Sorting } from '../../../interfaces/Sorting';

export const SearchAndSort = () => {
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<Sorting>(Sorting.NO_SORTING);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);  
  }
  
  const handleSortingChange = (e: SelectChangeEvent<string>) => {
    setSorting((e.target.value as Sorting));
  }

  return (
    <Stack direction='row' spacing={2}>      
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
      <Box sx={{ flexShrink: 1, flexBasis: '12rem' }}>        
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