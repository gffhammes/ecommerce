import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { SnackbarKey, useSnackbar } from 'notistack';
import React from 'react';

interface ISnackbarCloseButtonProps {
  snackbarKey: SnackbarKey;
}

export const SnackbarCloseButton = ({ snackbarKey }: ISnackbarCloseButtonProps) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon sx={{ color: 'white' }} />
    </IconButton>
  );
}
