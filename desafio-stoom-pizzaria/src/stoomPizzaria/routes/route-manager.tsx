import React, { useCallback, useContext } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import getApplicationPages from './pages';
import { IPage } from '../ts/interfaces/route-interfaces';
import { PizzariaContext } from '../store/context';

/**
 * @description Route manager.
 */
export const RouteContext: React.Context<{}> = React.createContext({});
const RouteProvider: React.FC = () => {
  const { pages, product }: any = useContext(PizzariaContext);
  const finalPages: IPage[] = getApplicationPages(pages, product);

  /**
   * @description Change current route.
   * @param {string} alias page alias.
   * @param {string} tab page tab.
   */
  const changeRoute = useCallback((alias: string, tab?: string): void => {
    const pageAlias = finalPages.filter((page: IPage) => page.alias === alias);
    if (pageAlias.length === 1) {
      const path: string | undefined = pageAlias.pop()?.path;
      tab ? history.push(`${path}/${tab}` || '') : history.push(path || '');
      window.location.reload();
    }
  }, []);

  return (
    <React.Fragment>
    <RouteContext.Provider value={{ changeRoute }}>
      <Router history={history}>
        <Switch>
          {finalPages.map((page: IPage, index: number) => {
            return (
              <Route
                key={`route-${index}`}
                path={page.path}
                component={page.pageComponent}
                exact
              />
            );
          })}
          <Redirect from="*" to={`/${product}/stoom-welcome`} exact />
        </Switch>
      </Router>
    </RouteContext.Provider>
    </React.Fragment>
  );
};

export default RouteProvider;