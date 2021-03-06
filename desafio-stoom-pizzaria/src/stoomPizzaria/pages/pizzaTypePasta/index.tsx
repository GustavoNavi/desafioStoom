import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiTypePasta } from '../../api/index';

/**
 * @description Pizzaria Type Pasta Page.
 */
export const PizzaTypePasta: React.FC = () => {
    const { changeRoute }: any = useContext(RouteContext);
    const [arrayPasta, setArrayPasta] = useState<string[]>();
    const [selectedTypePasta, setSelectedTypePasta] = useState<string>('');

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
        async function getPizzaTypePasta() {
            const response = await apiTypePasta.get('');
            setArrayPasta(response.data);
        }

        /**
         * @description call function getPizzaTypePasta.
         */
        useLayoutEffect(() => {
            getPizzaTypePasta();
        }, []);

        /**
         * @description handle selected pizza type pasta.
         * @param typePasta selected pizza type pasta.
         */
        function handleSelectedTypePasta(typePasta: string) {
            setSelectedTypePasta(typePasta);
        }

        /**
         * @description handle submit.
         */
        function handleSubmit() {
            sessionStorage.setItem('typePasta', selectedTypePasta);
            changeRoute('pizza-size')
        }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                <StySpanContainer>
                <span>Escolha o tipo da sua massa e clique em "Próximo"</span>
                <StyContainerItems>
                {arrayPasta?.map((element: any, index: any) => 
                {
                  return (
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedTypePasta(element)} selected={element === selectedTypePasta ? true : false}>
                        <div id={`${index}-id`} key={index} >
                            <span>{element}</span>
                        </div>
                        </StyItems>
                    )  
                }
                )}
                </StyContainerItems>
                <span>Passo 2 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('stoom-welcome')} title="Voltar"/>
                    <PizzariaFillButton id="button-id" action={() => handleSubmit()} title="Próximo" disable={selectedTypePasta? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaTypePasta;