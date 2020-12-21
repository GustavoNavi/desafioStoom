import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiPizzaSize } from '../../api/index';

/**
 * @description Pizzaria Size Page.
 */
export const PizzaSize: React.FC = () => {
    const { changeRoute }: any = useContext(RouteContext);
    const [arraySize, setArraySize] = useState<string[]>();
    const [selectedPizzaSize, setSelectedPizzaSize] = useState<string>('');

    /**
     * @description Remove sessionStorages.
     */
    useLayoutEffect(() => {
        sessionStorage.removeItem('pizzaSize');
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        /**
         * @description Call method get of backend
         */
        async function getPizzaSize() {
            const response = await apiPizzaSize.get('');
            setArraySize(response.data);
        }

        /**
         * @description call function getPizzaSize.
         */
        useLayoutEffect(() => {
            getPizzaSize();
        }, []);

        /**
         * @description handle selected pizza size.
         * @param typePasta selected pizza size.
         */
        function handleSelectedPizzaSize(typePasta: string) {
            setSelectedPizzaSize(typePasta);
        }

        /**
         * @description handle submit.
         */
        function handleSubmit() {
            sessionStorage.setItem('pizzaSize', selectedPizzaSize);
            changeRoute('pizza-filling');
        }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                <StySpanContainer>
                <span>Escolha o tamanho da pizza e clique em "Próximo"</span>
                <StyContainerItems>
                {arraySize?.map((element: any, index: any) => 
                {
                  return (
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedPizzaSize(element)} selected={selectedPizzaSize === element ? true : false}>
                        <div id={`${index}-id`} key={index} >
                            <span>{element}</span>
                        </div>
                        </StyItems>
                    )  
                }
                )}
                </StyContainerItems>
                <span>Passo 3 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('pizza-type-of-pasta')} title="Voltar"/>
                    <PizzariaFillButton id="button-id" action={() =>  handleSubmit()} title="Próximo" disable={selectedPizzaSize ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaSize;