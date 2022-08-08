import { Button, ButtonGroup } from '@mui/material'
import React, { useContext } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../../Contexts/Cart/CartContext';

interface ICartItemButtonsProps {
  productId: number;
}

export const CartItemButtons = ({ productId }: ICartItemButtonsProps) => {
  const { removeProductFromCart, addOneUnity, removeOneUnity } = useContext(CartContext);

  return (
    <ButtonGroup orientation='vertical' size="small" >
      <Button onClick={() => addOneUnity(productId)}><AddIcon/></Button>
      <Button onClick={() => removeOneUnity(productId)}><RemoveIcon/></Button>
      <Button onClick={() => removeProductFromCart(productId)}><DeleteOutlineIcon/></Button>
    </ButtonGroup>
  )
}