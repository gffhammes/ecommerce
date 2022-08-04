import { SelectAllOutlined } from '@mui/icons-material'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface IAutocompleteProps {
  label: string;
}

export const Autocomplete = ({ label }: IAutocompleteProps) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth margin='dense'>
      <InputLabel>{label}</InputLabel>
      <Select
        value={age}
        label={label}
        onChange={handleChange}        
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}