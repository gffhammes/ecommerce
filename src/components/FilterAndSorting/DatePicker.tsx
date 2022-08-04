import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

interface IDatePickerProps {
  label: string;
}

export const DatePicker = ({ label }: IDatePickerProps) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField size="small" margin='dense' fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
}
