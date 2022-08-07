import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import ptLocale from 'date-fns/locale/pt'

interface IDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
}

export const DatePicker = ({ label, value, onChange }: IDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptLocale}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        mask="__/__/____"
        inputFormat='dd/MM/yyyy'
        renderInput={(params: TextFieldProps) => <TextField size="small" margin='dense' fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
}
