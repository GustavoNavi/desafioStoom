import React, { ButtonHTMLAttributes } from 'react';

import { StyContainer } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void;
  width?: string;
  height?: string;
  type?: 'button' | 'submit';
  title?: string;
  id: string;
  disable?: boolean;
}

export const PizzariaButton: React.FC<Props> = ({
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
      width={width}
      height={height}
      id={`${id}-button-container-id`}
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