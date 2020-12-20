import React, { useEffect, useState } from 'react';
import { IPage } from '../ts/interfaces/route-interfaces';

interface ICommonsProvider {
  product: string;
  pages: IPage[];
}

export const CommonsContext: React.Context<{}> = React.createContext({});
const CommonsProvider: React.FC<ICommonsProvider> = ({
  product,
  pages,
  children,
}) => {

  return (
    <CommonsContext.Provider
      value={{
        product,
        pages,
      }}
    >
      {children}
    </CommonsContext.Provider>
  );
};

export default CommonsProvider;