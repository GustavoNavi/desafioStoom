import React, { useEffect, useLayoutEffect, useState } from 'react';
import { IPage } from '../ts/interfaces/route-interfaces';

interface IPizzariaProvider {
  product: string;
  pages: IPage[];
}

/**
 * @description Context of Pizzaria.
 */
export const PizzariaContext: React.Context<{}> = React.createContext({});
const PizzariaProvider: React.FC<IPizzariaProvider> = ({
  product,
  pages,
  children,
}) => {

  return (
    <PizzariaContext.Provider
      value={{
        product,
        pages,
      }}
    >
      {children}
    </PizzariaContext.Provider>
  );
};

export default PizzariaProvider;