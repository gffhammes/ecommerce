import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Common/Header';
import { Box, Stack } from '@mui/material';
import { RoutesComponent } from './Routes';

function App() {
  return (
    <Stack sx={{ height: '100%', backgroundColor: '#ededed', overflowY: 'scroll' }}>
      <Header />
      <Box sx={{ py: 10 }}>        
        <RoutesComponent />
      </Box>
    </Stack>    
  );
}

export default App;
