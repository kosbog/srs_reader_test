import { Button as FlowbiteButton } from 'flowbite-react';
import { ButtonProps } from 'flowbite-react';
import React, { PropsWithChildren } from 'react';

interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const Button: React.FC<PropsWithChildren<CustomButtonProps>> = ({ children, icon, ...props }) => {
  return (
    <FlowbiteButton {...props}>
      {icon}
      {children}
    </FlowbiteButton>
  );
};