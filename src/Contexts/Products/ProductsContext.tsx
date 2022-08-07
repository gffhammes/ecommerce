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
  handleSorting: (sorting: Sorting) => void;
  handleSearch: (value: string) => void;
}

export const defaultProductsContext = {
  products: null,
  isFetching: true,
  error: null,
  filtersAndSorting: filtersAndSortingInitialState,
  filteredProducts: null,
  handleFilter: () => {},
  handleSorting: () => {},
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

    const searchProducts = newProducts.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    return searchProducts;
  }, [data, filtersAndSorting])

  const handleFilter = (filters: IFilter) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      ...filters
    }))
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
    
    // setFilteredProducts(sortedProducts);
  }

  const handleSearch = (value: string) => {
    setFiltersAndSorting(filtersAndSorting => ({
      ...filtersAndSorting,
      search: value,
    }))
  }
  
  const contextValue = {
    products: data,
    isFetching,
    error,
    filtersAndSorting,
    filteredProducts,
    handleFilter,
    handleSorting,
    handleSearch,
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}