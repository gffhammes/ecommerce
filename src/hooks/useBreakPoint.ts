import { createTheme, useMediaQuery } from "@mui/material";

const theme = createTheme();

export const useBreakPoint = () => {  
  const xsSize = useMediaQuery(theme.breakpoints.up('xs'));
  const smSize = useMediaQuery(theme.breakpoints.up('sm'));
  const mdSize = useMediaQuery(theme.breakpoints.up('md'));
  const lgSize = useMediaQuery(theme.breakpoints.up('lg'));
  const xlSize = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    xsSize,
    smSize, 
    mdSize, 
    lgSize, 
    xlSize, 
  }
}