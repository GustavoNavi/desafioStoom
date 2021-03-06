import React from 'react';
import { StyContainer, StyContent } from './styles';
import PizzaFaixa from '../../../assets/images/PizzaFaixa.png'

interface Props {
  hasMargin?: boolean;
  hasShadow?: boolean;
  hasBorderRadius?: boolean;
}

/**
 * @description Pizza Page Body.
 */
export const PizzariaPage: React.FC<Props> = ({
  children,
  hasMargin = true,
  hasShadow = true,
  hasBorderRadius = false,
}) => {
  return (
    <StyContainer
      hasMargin={hasMargin}
      hasShadow={hasShadow}
      hasBorderRadius={hasBorderRadius}
    >
      <img src={PizzaFaixa}/>
      <StyContent id="content-id">
        {children}
      </StyContent>
    </StyContainer>
  );
};
export default PizzariaPage;