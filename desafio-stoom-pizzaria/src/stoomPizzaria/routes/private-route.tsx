import React, { useContext, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CommonsContext } from '../store/context';

const PrivateRoute: React.FC<any> = ({ component: Component, ...props }) => {
  const { product }: any = useContext(CommonsContext);
  return (
    <Redirect to={`/${product}/stoom-welcome`} />
  );
};

export default PrivateRoute;