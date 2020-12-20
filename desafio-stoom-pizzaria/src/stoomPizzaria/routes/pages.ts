import PizzaFilling from '../pages/pizzaFilling';
import PizzaOfDay from '../pages/pizzaOfDay';
import PizzaOrder from '../pages/pizzaOrder';
import PizzaPayment from '../pages/pizzaPayment';
import PizzaSideDish from '../pages/pizzaSideDish';
import PizzaSize from '../pages/pizzaSize';
import PizzaTypePasta from '../pages/pizzaTypePasta';
import PizzaWelcome from '../pages/pizzaWelcome';
import { Templates } from '../ts/interfaces/enum/route-enum';
import { IPage } from '../ts/interfaces/route-interfaces';

/**
 * @description Gets Commons native pages.
 * @param product current product.
 * @returns Commons native pages.
 */
function getCommonsPages(product: string): IPage[] {
  return [
    {
      alias: 'stoom-welcome',
      path: `/${product}/stoom-welcome`,
      template: Templates.public,
      pageComponent: PizzaWelcome,
    },
    {
      alias: 'pizza-of-day',
      path: `/${product}/pizza-of-day`,
      template: Templates.public,
      pageComponent: PizzaOfDay,
    },
    {
      alias: 'pizza-type-of-pasta',
      path: `/${product}/pizza-type-of-pasta`,
      template: Templates.public,
      pageComponent: PizzaTypePasta,
    },
    {
      alias: 'pizza-size',
      path: `/${product}/pizza-size`,
      template: Templates.public,
      pageComponent: PizzaSize,
    },
    {
      alias: 'pizza-filling',
      path: `/${product}/pizza-filling`,
      template: Templates.public,
      pageComponent: PizzaFilling,
    },
    {
      alias: 'pizza-side-dish',
      path: `/${product}/pizza-side-dish`,
      template: Templates.public,
      pageComponent: PizzaSideDish,
    },
    {
      alias: 'pizza-payment',
      path: `/${product}/pizza-payment`,
      template: Templates.public,
      pageComponent: PizzaPayment,
    },
    {
      alias: 'pizza-order',
      path: `/${product}/pizza-order`,
      template: Templates.public,
      pageComponent: PizzaOrder,
    },
  ];
}

/**
 * @description Gets merged application pages.
 * @param ProductPages Product Pages Array.
 * @returns Merged application pages.
 */
export default function getApplicationPages(
  ProductPages: IPage[],
  product: string
): IPage[] {
  const CommonsPages: IPage[] = getCommonsPages(product);
  CommonsPages.forEach((commonsPage: IPage) => {
    ProductPages.forEach((productPage: IPage) => {
      if (productPage.alias === commonsPage.alias) {
        commonsPage.pageComponent = productPage.pageComponent;
        commonsPage.path = productPage.path;
      }
    });
  });
  return [...CommonsPages, ...ProductPages];
}