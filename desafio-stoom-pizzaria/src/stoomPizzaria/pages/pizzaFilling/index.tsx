import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiPizzaFilling } from '../../api/index';

/**
 * @description Pizzaria Filling Page.
 */
export const PizzaFilling: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [arrayFilling, setArrayFilling] = useState<string[]>();
    const [selectedPizzaFilling, setSelectedPizzaFilling] = useState<string>('');

    /**
     * @description Remove sessionStorages.
     */
    useLayoutEffect(() => {
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        /**
         * @description Call method get of backend
         */
        async function getPizzaFilling() {
            const response = await apiPizzaFilling.get('');
            setArrayFilling(response.data);
        }

        /**
         * @description call function getPizzaFilling.
         */
        useLayoutEffect(() => {
            getPizzaFilling();
        }, []);

        /**
         * @description handle selected pizza size.
         * @param typePasta selected pizza size.
         */
        function handleSelectedPizzaFilling(typePasta: string) {
            setSelectedPizzaFilling(typePasta);
        }

        /**
         * @description handle submit.
         */
        function handleSubmit() {
            sessionStorage.setItem('pizzaFilling', selectedPizzaFilling);
            changeRoute('pizza-side-dish');
        } 

        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                 <StySpanContainer>
                <span>Selecione o sabor da sua pizza e clique em "Próximo"</span>
                <StyContainerItems>
                {arrayFilling?.map((element: any, index: any) => 
                {
                  return (
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedPizzaFilling(element)} selected={selectedPizzaFilling === element ? true : false}>
                        <div id={`${index}-id`} key={index} >
                            <span>{element}</span>
                        </div>
                        </StyItems>
                    )  
                }
                )}
                </StyContainerItems>
                <span>Passo 4 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('pizza-size')} title="Voltar"/>
                    <PizzariaFillButton id="button-id" action={() => handleSubmit()} title="Próximo" disable={selectedPizzaFilling ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaFilling;