import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export const ButtonMui: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};