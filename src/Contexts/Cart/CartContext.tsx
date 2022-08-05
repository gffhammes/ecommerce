import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../../interfaces/Product";

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartContext {
   cart: ICartItem[];
   totalPrice: number;
   addProductToCart: (product: IProduct) => void;
   removeProductFromCart: (productId: number) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const defaultCartContext = {
  cart: [],
  totalPrice: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
}

export const CartContext = createContext<ICartContext>(defaultCartContext);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const totalPrice = cart.reduce((sum, cartItem) => sum + (cartItem.product.price * cartItem.quantity), 0);
  
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

  const contextValue = {
    cart,
    totalPrice,
    addProductToCart,
    removeProductFromCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}