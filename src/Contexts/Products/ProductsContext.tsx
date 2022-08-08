import { createContext, ReactNode, useMemo, useState } from "react";
import { IProduct } from "../../interfaces/Product";
import { useFetch } from "../../hooks/useFetch";
import { IFilter } from "../../interfaces/Filter";
import { CreationDateSorting, PriceSorting } from "../../interfaces/Sorting";
import { IFiltersAndSorting } from "../../interfaces/FiltersAndSorting";
import { getFilteredAndSortedProducts } from "../../helpers/getFilteredAndSortedProducts";

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
  filteredAndSortedProducts: IProduct[] | null;
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
  filteredAndSortedProducts: null,
  handleFilter: () => {},
  handleCreationDateSortingChange: () => {},
  handlePriceSortingChange: () => {},
  handleSearch: () => {},
}

export const ProductsContext = createContext<IProductsContext>(defaultProductsContext);

export const ProductsContextProvider = ({ children }: IProductsContextProviderProps) => {
  const { data, isFetching, error } = useFetch<IProduct[]>("/products");
  const [filtersAndSorting, setFiltersAndSorting] = useState<IFiltersAndSorting>(filtersAndSortingInitialState);

  const filteredAndSortedProducts = useMemo(() => {
    return getFilteredAndSortedProducts(filtersAndSorting, data);
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
    filteredAndSortedProducts,
    handleFilter,
    handleSearch,
    handleCreationDateSortingChange,
    handlePriceSortingChange,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}