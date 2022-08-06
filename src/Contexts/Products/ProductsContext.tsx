import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Product";
import { useFetch } from "../../hooks/useFetch";
import { IFilter } from "../../interfaces/Filter";

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProduct[] | null;
  isFetching: boolean;
  error: Error | null;
  filteredProducts: IProduct[] | null;
  handleFilter: (filters: IFilter) => void;
}

export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  filteredProducts: null,
  handleFilter: () => {},
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch<IProduct[]>("/products");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if (!data) return;
    setFilteredProducts(data);
  }, [data])

  const handleFilter = useCallback((filters: IFilter) => {
    const {
      minPrice,
      maxPrice,
      minCreationDate,
      maxCreationDate,
    } = filters;

    let newProducts = data ? [...data] : [];

    if (minPrice) {
      newProducts = newProducts.filter(product => product.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      newProducts = newProducts.filter(product => product.price <= parseInt(maxPrice));
    }
    
    if (minCreationDate) {
      newProducts = newProducts.filter(product => new Date(product.createdAt) >= minCreationDate);
    }
    
    if (maxCreationDate) {
      newProducts = newProducts.filter(product => new Date(product.createdAt) <= maxCreationDate);
    }

    // if (priceSorting === PriceSorting.MORE_EXPENSIVE) {
    //   newProducts.sort((productA, productB) => productB.price - productA.price);
    // } else if (priceSorting === PriceSorting.CHEAPER) {
    //   newProducts.sort((productA, productB) => productA.price - productB.price);
    // }

    // if (creationDateSorting === CreationDateSorting.OLDER) {
    //   newProducts.sort((productA, productB) => Number(new Date(productA.createdAt)) - Number(new Date(productB.createdAt)));
    // } else if (creationDateSorting === CreationDateSorting.NEWER) {
    //   newProducts.sort((productA, productB) => Number(new Date(productB.createdAt)) - Number(new Date(productA.createdAt)));
    // }

    setFilteredProducts(newProducts);
  }, [data])
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    filteredProducts,
    handleFilter,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}