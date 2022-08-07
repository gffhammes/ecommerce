import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Stack } from '@mui/material';
import { CartContext } from '../../Contexts/Cart/CartContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const cartContext = useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ width: '100%' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }} >          
          <Link to='/'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fake Shop
            </Typography>
          </Link>
          <IconButton color='inherit' onClick={cartContext.handleOpenCart}>
            <Badge badgeContent={cartContext.totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
