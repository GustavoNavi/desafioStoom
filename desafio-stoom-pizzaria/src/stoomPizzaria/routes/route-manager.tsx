import React, { useCallback, useContext } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import PrivateRout from './private-route';
import getApplicationPages from './pages';
import { IPage } from '../ts/interfaces/route-interfaces';
import { CommonsContext } from '../store/context';
import { Templates } from '../ts/interfaces/enum/route-enum';

export const RouteContext: React.Context<{}> = React.createContext({});
const RouteProvider: React.FC = () => {
  const { pages, product }: any = useContext(CommonsContext);
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
    <RouteContext.Provider value={{ changeRoute }}>
      <Router history={history}>
        <Switch>
          {finalPages.map((page: IPage, index: number) => {
            return (
              <Route
                key={`route-${index}`}
                path={page.path}
                component={page.pageComponent}
              />
            );
          })}
          <Redirect from="*" to={`/${product}/stoom-welcome`} />
        </Switch>
      </Router>
    </RouteContext.Provider>
  );
};

export default RouteProvider;