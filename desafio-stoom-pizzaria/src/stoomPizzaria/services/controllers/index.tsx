import { IHttpMethod } from '../../ts/interfaces/enum/fetch-enums';
import fetch from '../ferch';

const controllerName: string = 'pedidos';
const endPoints: any = {
  setTypePasta: 'get-pastaType',
  setPizzaSize: 'get-pizzaSize',
  setPizzaFilling: 'get-pizzaFilling',
  setPizzaSideDish: 'get-pizzaSideDish',
};

export function setTypePasta(): any {
  console.log(`${controllerName}/${endPoints.setTypePasta}`);
  return fetch({
    method: IHttpMethod.POST,
    path: `${controllerName}/${endPoints.setTypePasta}`,
    service: 'stoomPizzaria',
  });
}

export function setPizzaSize(): any {
  return fetch({
    method: IHttpMethod.POST,
    path: `${controllerName}/${endPoints.setPizzaSize}`,
    service: 'stoomPizzaria',
  });
}

export function setPizzaFilling(): any {
  return fetch({
    method: IHttpMethod.POST,
    path: `${controllerName}/${endPoints.setPizzaFilling}`,
    service: 'stoomPizzaria',
  });
}

export function setPizzaSideDish(): any {
  return fetch({
    method: IHttpMethod.POST,
    path: `${controllerName}/${endPoints.setPizzaSideDish}`,
    service: 'stoomPizzaria',
  });
}