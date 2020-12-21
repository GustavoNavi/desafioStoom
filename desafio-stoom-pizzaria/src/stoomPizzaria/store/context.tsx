import React, { useEffect, useLayoutEffect, useState } from 'react';
import { IPage } from '../ts/interfaces/route-interfaces';

interface IPizzariaProvider {
  product: string;
  pages: IPage[];
}

export const PizzariaContext: React.Context<{}> = React.createContext({});
const PizzariaProvider: React.FC<IPizzariaProvider> = ({
  product,
  pages,
  children,
}) => {

  const [firstRenderr, setFirstRender] = useState<boolean>(false);

  useLayoutEffect(() => {
      sessionStorage.setItem('reloaded', 'true');
  }, [])

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