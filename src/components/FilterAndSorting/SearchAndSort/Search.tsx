import { InputAdornment } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import { ProductsContext } from '../../../Contexts/Products/ProductsContext';
import { TextField } from '../Inputs/TextField'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const productsContext = useContext(ProductsContext);
  const [search, setSearch] = useState<string>(productsContext.filtersAndSorting.search);
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    productsContext.handleSearch(e.target.value);
  }

  return (
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
  )
}