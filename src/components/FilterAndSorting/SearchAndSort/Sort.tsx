import { Chip, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { ProductsContext } from '../../../Contexts/Products/ProductsContext';
import { CreationDateSorting, PriceSorting } from '../../../interfaces/Sorting';

export const Sort = () => {
  const { filtersAndSorting, handleCreationDateSortingChange, handlePriceSortingChange } = useContext(ProductsContext);

  return (
    <Stack spacing={1}>
      <Stack direction='row' spacing={1}>
        {Object.values(CreationDateSorting).map((option) => {
          if (option === "") {
            return null;
          }

          const isSelectedOption = filtersAndSorting.creationDateSorting === option;

          return (
            <Chip
              key={option}
              label={option}
              size="small"
              color={isSelectedOption ? "primary" : 'default'}
              onClick={() => isSelectedOption ? handleCreationDateSortingChange(CreationDateSorting.NO_SORTING) : handleCreationDateSortingChange(option)}
            />
          )
        }

        )}
      </Stack>
      
      <Stack direction='row' spacing={1}>
        {Object.values(PriceSorting).map((option) => {
          if (option === "") return null;         

          const isSelectedOption = filtersAndSorting.priceSorting === option;

          return (
            <Chip
              key={option}
              label={option}
              size="small"
              color={isSelectedOption ? "secondary" : 'default'}
              onClick={() => isSelectedOption ? handlePriceSortingChange(PriceSorting.NO_SORTING) : handlePriceSortingChange(option)}
            />
          )
        }

        )}
      </Stack>
    </Stack>
  )
}