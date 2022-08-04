import { Context, createContext, ReactNode, useState } from "react";

interface ICartItem {
  id: string;
  quantity: number;
}

interface ICartContext {
   cart: ICartItem[];
   addProductToCart: (productId: string) => void;
   removeProductFromCart: (productId: string) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const defaultCartContext = {
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
}

export const CartContext = createContext<ICartContext>(defaultCartContext);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  
  const addProductToCart = (productId: string) => {
    const newCart = [...cart];
  
    const existingItem = newCart.find(cartItem => cartItem.id === productId);
    
    if (existingItem) {
        existingItem.quantity += existingItem.quantity 
    } else {
      newCart.push({
        id: productId,
        quantity: 1,
      });
    }
    
    setCart(newCart);
  }

  const removeProductFromCart = (productId: string) => {
    const newCart = cart.filter((item) => item.id !== productId);

    setCart(newCart);
  }

  const contextValue = {
    cart,
    addProductToCart,
    removeProductFromCart
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}