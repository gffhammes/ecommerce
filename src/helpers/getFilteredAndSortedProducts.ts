import { IFiltersAndSorting } from "../interfaces/FiltersAndSorting";
import { IProduct } from "../interfaces/Product";
import { CreationDateSorting, PriceSorting } from "../interfaces/Sorting";

export const getFilteredAndSortedProducts = (filtersAndSorting: IFiltersAndSorting, products: IProduct[] | null) => {
  const {
    minPrice,
    maxPrice,
    minCreationDate,
    maxCreationDate,
    search,
    creationDateSorting,
    priceSorting,
  } = filtersAndSorting;

  let newProducts = products ? [...products] : [];

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
}