import { Box, Button, Collapse, Paper, SxProps, Theme } from '@mui/material'
import React, { useState } from 'react'
import { Filter } from './Filter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const sxFilterWrapper: SxProps<Theme> = {
  backgroundColor: '#dadada',
  height: 'fit-content',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  p: 2,
  mt: 2
}

export const MobileFilterCollapse = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(open => !open);
  }

  return (
    <Box>
      <Button startIcon={<FilterAltIcon />} onClick={toggleOpen}>Filtros</Button>
      <Collapse in={open}>
        <Paper variant='outlined' sx={sxFilterWrapper}>
          <Filter />
        </Paper>
      </Collapse>
    </Box>
  )
}