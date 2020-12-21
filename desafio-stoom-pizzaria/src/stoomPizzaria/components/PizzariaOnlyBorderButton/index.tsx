import React, { ButtonHTMLAttributes } from 'react';

import { StyContainer } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void;
  width?: string;
  height?: string;
  type?: 'button' | 'submit';
  title?: string;
  disable?: boolean;
  id: string;

  borderRadius?: string;
}

export const PizzariaOnlyBorderButton: React.FC<Props> = ({
  id,
  action = () => { },
  type = 'button',
  width,
  height,
  title = '',
  disable = false,
  ...rest
}) => {
  return (
    <StyContainer
      id={`${id}-button-container-id`}
      width={width}
      height={height}
      disable={disable}
    >
      <button
        type={type}
        id={`${id}-button-id`}
        onClick={action}
        {...rest}
      >
        <span>{title}</span>
      </button>
    </StyContainer>
  );
};