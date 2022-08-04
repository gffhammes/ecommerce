import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../../Contexts/Cart/CartContext';

interface IHeaderProps {
  handleOpenCart: () => void;
}

export const Header = ({ handleOpenCart }: IHeaderProps) => {
  const context = useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fake Shop
        </Typography>
        <IconButton color='inherit' onClick={handleOpenCart}>
          <Badge badgeContent={context.cart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
