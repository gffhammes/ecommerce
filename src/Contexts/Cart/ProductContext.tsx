import { createContext, ReactNode } from "react";
import { IProduct } from "../../interfaces/Product";
import { useFetch } from "../../hooks/useFetch";

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProduct[] | null;
  isFetching: boolean;
  error: Error | null;
  getProductById: (id: number) => IProduct | null;
}

export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  getProductById: () => null,
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch<IProduct[]>("/products");

  
  const getProductById = (id: number) => {
    if (!data) return null;
    return data.find((product: any) => product.id === id) ?? null;
  }
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    getProductById
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}