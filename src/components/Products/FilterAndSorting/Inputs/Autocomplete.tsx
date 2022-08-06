import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface IAutocompleteProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: SelectChangeEvent<string>) => void;
}

export const Autocomplete = ({ label, value, options, onChange }: IAutocompleteProps) => {
  return (
    <FormControl size="small" fullWidth margin='dense'>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}