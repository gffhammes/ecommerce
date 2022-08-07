import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Product";
import { useFetch } from "../../hooks/useFetch";
import { IFilter } from "../../interfaces/Filter";
import { Sorting } from "../../interfaces/Sorting";

interface IProductsContextProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProduct[] | null;
  isFetching: boolean;
  error: Error | null;
  filteredProducts: IProduct[] | null;
  handleFilter: (filters: IFilter) => void;
  handleSorting: (sorting: Sorting) => void;
  handleSearch: (value: string) => void;
}

export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  filteredProducts: null,
  handleFilter: () => {},
  handleSorting: () => {},
  handleSearch: () => {},
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch<IProduct[]>("/products");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if (!data) return;
    setFilteredProducts(data);
  }, [data])

  const handleFilter = (filters: IFilter) => {
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

    setFilteredProducts(newProducts);
  }

  const handleSorting = (sorting: Sorting) => {
    const sortedProducts = filteredProducts ? [...filteredProducts] : [];;

    switch (sorting) {
      case Sorting.CHEAPER:
        sortedProducts.sort((productA, productB) => productA.price - productB.price);
        break;
      case Sorting.MORE_EXPENSIVE:
        sortedProducts.sort((productA, productB) => productB.price - productA.price);
        break;
      case Sorting.OLDER:
        sortedProducts.sort((productA, productB) => Number(new Date(productA.createdAt)) - Number(new Date(productB.createdAt)));
        break;
      case Sorting.NEWER:
        sortedProducts.sort((productA, productB) => Number(new Date(productB.createdAt)) - Number(new Date(productA.createdAt)));
        break;
      default: 
    }
    
    setFilteredProducts(sortedProducts);
  }

  const handleSearch = (value: string) => {
    const searchProducts = data ? data.filter(product => product.title.toLowerCase().includes(value.toLowerCase())) : [];
    setFilteredProducts(searchProducts);
  }
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    filteredProducts,
    handleFilter,
    handleSorting,
    handleSearch,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}