import React from 'react';
import { IPage } from './ts/interfaces/route-interfaces';
import RouteManager from './routes/route-manager';
import GlobalStyle from './styles/global';
import PizzaProvider from './store/context';
import PizzaImg from '../assets/images/pizzaStoom.jpg';
import { StyContainer, StyContent } from './styles';

interface IPizzaria {
  product?: string;
  pages?: IPage[];
  themes?: Object;
}

export const StoomPizzaria: React.FC<IPizzaria> = ({
  pages = [],
}) => {

  return (
    <PizzaProvider
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
    </PizzaProvider>
  );
};