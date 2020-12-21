import PizzaFilling from '../pages/pizzaFilling';
import PizzaOfDay from '../pages/pizzaOfDay';
import PizzaOrder from '../pages/pizzaOrder';
import PizzaPayment from '../pages/pizzaPayment';
import PizzaSideDish from '../pages/pizzaSideDish';
import PizzaSize from '../pages/pizzaSize';
import PizzaTypePasta from '../pages/pizzaTypePasta';
import PizzaWelcome from '../pages/pizzaWelcome';
import { IPage } from '../ts/interfaces/route-interfaces';

/**
 * @description Gets Pizza pages.
 * @param product product pizzariaStoom
 */
function getPizzaPages(product: string): IPage[] {
  return [
    {
      alias: 'stoom-welcome',
      path: `/${product}/stoom-welcome`,
      template: 'PUBLIC',
      pageComponent: PizzaWelcome,
    },
    {
      alias: 'pizza-of-day',
      path: `/${product}/pizza-of-day`,
      template: 'PUBLIC',
      pageComponent: PizzaOfDay,
    },
    {
      alias: 'pizza-type-of-pasta',
      path: `/${product}/pizza-type-of-pasta`,
      template: 'PUBLIC',
      pageComponent: PizzaTypePasta,
    },
    {
      alias: 'pizza-size',
      path: `/${product}/pizza-size`,
      template: 'PUBLIC',
      pageComponent: PizzaSize,
    },
    {
      alias: 'pizza-filling',
      path: `/${product}/pizza-filling`,
      template: 'PUBLIC',
      pageComponent: PizzaFilling,
    },
    {
      alias: 'pizza-side-dish',
      path: `/${product}/pizza-side-dish`,
      template: 'PUBLIC',
      pageComponent: PizzaSideDish,
    },
    {
      alias: 'pizza-payment',
      path: `/${product}/pizza-payment`,
      template: 'PUBLIC',
      pageComponent: PizzaPayment,
    },
    {
      alias: 'pizza-order',
      path: `/${product}/pizza-order`,
      template: 'PUBLIC',
      pageComponent: PizzaOrder,
    },
  ];
}

/**
 * @description Gets pages.
 * @param ProductPages product pizzariaStoom page.
 * @param product product pizzariaStoom alias.
 */
export default function getApplicationPages(
  ProductPages: IPage[],
  product: string
): IPage[] {
  const PizzaPages: IPage[] = getPizzaPages(product);
  PizzaPages.forEach((pizzaPages: IPage) => {
    ProductPages.forEach((productPage: IPage) => {
      if (productPage.alias === pizzaPages.alias) {
        pizzaPages.pageComponent = productPage.pageComponent;
        pizzaPages.path = productPage.path;
      }
    });
  });
  return [...PizzaPages, ...ProductPages];
}