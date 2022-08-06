import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface ISelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: SelectChangeEvent<string>) => void;
}

export const Select = ({ label, value, options, onChange }: ISelectProps) => {
  return (
    <FormControl size="small" fullWidth margin='dense'>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>{option === "" ? <em>Nenhum</em> : option}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}