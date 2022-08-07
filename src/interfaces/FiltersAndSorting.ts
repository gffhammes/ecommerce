import { IFilter } from "./Filter";
import { CreationDateSorting, PriceSorting } from "./Sorting";

export interface IFiltersAndSorting extends IFilter {
  search: string;
  creationDateSorting: CreationDateSorting;
  priceSorting: PriceSorting;
}