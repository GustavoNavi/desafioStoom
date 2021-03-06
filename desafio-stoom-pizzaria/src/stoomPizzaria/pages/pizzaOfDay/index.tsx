import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { StyButtonContainer, StyContainerItems, StyItems, StyContainer } from './styles';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { apiPizzaOfDay } from '../../api/index';

/**
 * @description Pizzaria Of Day Page.
 */
export const PizzaOfDay: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [arrayPizzaDay, setArrayPizzaDay] = useState<string[]>([]);
    const [selectedPizzaDay, setSelectedPizzaDay] = useState<boolean>(false);

    /**
     * @description Remove sessionStorages.
     */
    useLayoutEffect(() => {
        sessionStorage.removeItem('typePasta');
        sessionStorage.removeItem('pizzaSize');
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        /**
         * @description Call method get of backend
         */
        async function getPizzaOfDay() {
            const response = await apiPizzaOfDay.get('');
            setArrayPizzaDay(response.data);
        }

        /**
         * @description call function getPizzaOfDay.
         */
        useLayoutEffect(() => {
            getPizzaOfDay();
        }, []);

        /**
         * @description handle selected pizza of day.
         * @param typePasta selected pizza of day.
         */
        function handleSelectedPizzaDay(typePasta: boolean) {
            setSelectedPizzaDay(typePasta);
        }

        /**
         * @description handle submit.
         */
        function handleSubmit() {
            sessionStorage.setItem('pizzaDay', arrayPizzaDay?.toString());
            changeRoute('pizza-side-dish');
        }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                <StyContainer>
                <span>Hoje temos a seguinte pizza em promoção:</span>
                <StyContainerItems selected={selectedPizzaDay ? true : false}>
                {arrayPizzaDay?.map((element: any, index: any) => 
                {
                  return (
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedPizzaDay(true)} >
                        <div id={`${index}-id`} key={index} >
                            <span>{element}</span>
                        </div>
                        </StyItems>
                    )  
                }
                )}
                </StyContainerItems>
                <span>Ao juntar 100 pontos você ganha uma pizza GRÁTIS! =D</span>
                </StyContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('stoom-welcome')} title="Voltar"/>
                    <PizzariaFillButton id="button-id" action={() => handleSubmit()} title="Próximo" disable={selectedPizzaDay ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaOfDay;