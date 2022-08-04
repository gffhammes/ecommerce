import { createContext, ReactNode } from "react";
import { useFetch } from "../../hooks/useFetch";

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  products: any | null;
  isFetching: boolean;
  error: Error | null;
  getProductById: (id: string) => any;
}


export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  getProductById: () => {},
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch("/products");

  
  const getProductById = (id: string) => {
    return (data as any[]).find((product: any) => product.id === id)
  }
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    getProductById
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}