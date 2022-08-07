import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react'
import NumberFormat, { InputAttributes } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { value: string } }) => void;
}

const textFieldDefaultProps: TextFieldProps = {
  fullWidth: true,
  margin: 'dense',
  size: "small",
}

const FinancialInput = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function FinancialInput(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator='.'
				decimalSeparator=','
				decimalScale={2}
        isNumericString
        prefix="R$ "
      />
    );
  },
);

export const FinancialTextField = (props: TextFieldProps) => {
	return (
		<TextField
      {...textFieldDefaultProps}
      {...props}
      InputProps={{
        inputComponent: FinancialInput as any,
      }}
    />
	)
}


export const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField 
      {...textFieldDefaultProps}
      {...props}
    />
  )
}