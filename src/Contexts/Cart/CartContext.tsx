import { createContext, ReactNode, useState } from "react";
import { ICartItem } from "../../interfaces/Cart";
import { IProduct } from "../../interfaces/Product";

interface ICartContextProviderProps {
  children: ReactNode;
}

interface ICartContext {
   cart: ICartItem[];
   totalPrice: number;
   totalItems: number;
   open: boolean;
   isEmpty: boolean;
   addProductToCart: (product: IProduct) => void;
   removeProductFromCart: (productId: number) => void;
   clearCart: () => void;
   handleOpenCart: () => void;
   handleCloseCart: () => void;
}

export const defaultCartContext = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
  open: false,
  isEmpty: true,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
  handleOpenCart: () => {},
  handleCloseCart: () => {},
}

export const CartContext = createContext<ICartContext>(defaultCartContext);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenCart = () => {
    setOpen(true);
  }
  
  const handleCloseCart = () => {
    setOpen(false);
  }
  
  const addProductToCart = (product: IProduct) => {
    const newCart = [...cart];
  
    const existingItem = newCart.find(cartItem => cartItem.product.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
      newCart.push({
        product,
        quantity: 1,
      });
    }
    
    setCart(newCart);
  }

  const removeProductFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.product.id !== productId);

    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const totalPrice = cart.reduce((sum, cartItem) => sum + (cartItem.product.price * cartItem.quantity), 0);
  
  const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  const isEmpty = cart.length === 0;

  const contextValue = {
    cart,
    totalPrice,
    totalItems,
    open,
    isEmpty,
    addProductToCart,
    removeProductFromCart,
    clearCart,
    handleOpenCart,
    handleCloseCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}