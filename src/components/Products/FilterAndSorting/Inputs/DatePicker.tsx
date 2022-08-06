import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

interface IDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
}

export const DatePicker = ({ label, value, onChange }: IDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params: TextFieldProps) => <TextField size="small" margin='dense' fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
}
