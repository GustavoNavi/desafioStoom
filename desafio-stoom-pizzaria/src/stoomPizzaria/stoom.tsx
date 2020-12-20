import React from 'react';
import { IPage } from './ts/interfaces/route-interfaces';
import RouteManager from './routes/route-manager';
import GlobalStyle from './styles/global';
import CommonsProvider from './store/context';
import PizzaImg from '../assets/images/pizzaStoom.jpg';
import { StyContainer, StyContent } from './styles';

interface IHstCommons {
  product?: string;
  pages?: IPage[];
  themes?: Object;
}

/**
 * @description Hst Commons Component.
 * @param {IPage[]} pages product pages.
 * @returns HST Commons Template.
 */
export const StoomPizzaria: React.FC<IHstCommons> = ({
  pages = [],
}) => {

  return (
    <CommonsProvider
      product="pizzariaStoom"
      pages={pages}
    >
      <StyContainer>
        <img src={PizzaImg}/>
        <StyContent>
          <GlobalStyle />
          <RouteManager />
          <div style={{height: '10px'}}/>
        </StyContent>
      </StyContainer>
        
    </CommonsProvider>
  );
};