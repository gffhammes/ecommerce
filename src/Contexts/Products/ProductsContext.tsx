import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { IProduct } from "../../interfaces/Product";
import { useFetch } from "../../hooks/useFetch";
import { IFilter } from "../../interfaces/Filter";
import { CreationDateSorting, PriceSorting, Sorting } from "../../interfaces/Sorting";
import { IFiltersAndSorting } from "../../interfaces/FiltersAndSorting";

interface IProductsContextProviderProps {
  children: ReactNode;
}

const filtersAndSortingInitialState: IFiltersAndSorting = {
  minPrice: "",
  maxPrice: "",
  minCreationDate: null,
  maxCreationDate: null,
  search: "",
  creationDateSorting: CreationDateSorting.NO_SORTING,
  priceSorting: PriceSorting.NO_SORTING,
}

interface IProductsContext {
  products: IProduct[] | null;
  isFetching: boolean;
  error: Error | null;
  filtersAndSorting: IFiltersAndSorting;
  filteredProducts: IProduct[] | null;
  handleFilter: (filters: IFilter) => void;
  handleCreationDateSortingChange: (newValue: CreationDateSorting) => void; 
  handlePriceSortingChange: (newValue: PriceSorting) => void; 
  handleSearch: (value: string) => void;
}

export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  filtersAndSorting: filtersAndSortingInitialState,
  filteredProducts: null,
  handleFilter: () => {},
  handleCreationDateSortingChange: () => {},
  handlePriceSortingChange: () => {},
  handleSearch: () => {},
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch<IProduct[]>("/products");
  const [filtersAndSorting, setFiltersAndSorting] = useState<IFiltersAndSorting>(filtersAndSortingInitialState);

  const filteredProducts = useMemo(() => {
    const {
      minPrice,
      maxPrice,
      minCreationDate,
      maxCreationDate,
      search,
      creationDateSorting,
      priceSorting,
    } = filtersAndSorting;

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

    const searchedProducts = newProducts.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    const priceSortingFunction = (priceA: number, priceB: number) => {
      if (priceSorting === PriceSorting.CHEAPER) {
        return priceA - priceB;
      } else if (priceSorting === PriceSorting.MORE_EXPENSIVE) {
        return priceB - priceA;
      }

      return 0;
    }
    
    const creationDateSortingFunction = (dateA: Date, dateB: Date) => {
      if (creationDateSorting === CreationDateSorting.NEWER) {
        return Date.parse(dateB.toString()) - Date.parse(dateA.toString());
      } else if (creationDateSorting === CreationDateSorting.OLDER) {
        return Date.parse(dateA.toString()) - Date.parse(dateB.toString());
      }

      return 0;
    }

    const sortedProducts = searchedProducts.sort((productA, productB) => (
      priceSortingFunction(productA.price, productB.price)
      || creationDateSortingFunction(productA.createdAt, productB.createdAt)
    ))

    return sortedProducts;
  }, [data, filtersAndSorting])

  const handleFilter = (filters: IFilter) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      ...filters
    }));
  }
  
  const handleSearch = (value: string) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      search: value,
    }));
  }

  const handleCreationDateSortingChange = (newValue: CreationDateSorting) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      creationDateSorting: newValue,
    }));
  }
  
  const handlePriceSortingChange = (newValue: PriceSorting) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      priceSorting: newValue,
    }));
  }
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    filtersAndSorting,
    filteredProducts,
    handleFilter,
    handleSearch,
    handleCreationDateSortingChange,
    handlePriceSortingChange,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}