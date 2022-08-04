import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { Autocomplete } from './Autocomplete'
import { DatePicker } from './DatePicker'

interface IFilterAndSortingProps {}

export const FilterAndSorting = (props: IFilterAndSortingProps) => {
  return (
    <Box sx={{ height: '50rem', flex: '15rem', flexShrink: 0, flexGrow: 0, position: 'sticky', top: 0, pt: 4 }}>
      <Typography fontSize={12} sx={{ color: '#adadad' }}>FILTRAR</Typography>
      <Box sx={{ mt: 4 }}>        
        <Typography fontWeight={500}>Preço</Typography>
        <TextField fullWidth label='Mínimo' margin='dense' size="small"/>
        <TextField fullWidth label='Máximo' margin='dense' size="small"/>
      </Box>
      <Box sx={{ mt: 4 }}>        
        <Typography fontWeight={500}>Data de inclusão</Typography>
        <DatePicker label='De' />
        <DatePicker label='Até' />
      </Box>
      <Box sx={{ mt: 4 }}>        
        <Typography fontWeight={500}>Ordenar</Typography>
        <Autocomplete label='Preço' />
        <Autocomplete label='Data de inclusão' />
      </Box>
    </Box>
  )
}