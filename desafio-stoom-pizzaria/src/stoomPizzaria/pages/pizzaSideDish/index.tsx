import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiPizzaSideDish } from '../../api/index';

/**
 * @description Pizzaria Side Dish Page.
 */
export const PizzaSideDish: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [arraySideDish, setArraySideDish] = useState<string[]>();
    const [selectedSideDish, setSelectedSideDish] = useState<string>('');

    /**
     * @description Remove sessionStorages.
     */
    useLayoutEffect(() => {
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        /**
         * @description Call method get of backend
         */
        async function getPizzaSideDish() {
            const response = await apiPizzaSideDish.get('');
            setArraySideDish(response.data);
        }

        /**
         * @description call function getPizzaSideDish.
         */
        useLayoutEffect(() => {
            getPizzaSideDish();
        }, []);

        /**
         * @description handle selected pizza side dish.
         * @param typePasta selected pizza side dish.
         */
        function handleSelectedSideDish(typePasta: string) {
            setSelectedSideDish(typePasta);
        }

        /**
         * @description handle submit.
         */
        function handleSubmit() {
            sessionStorage.setItem('pizzaSideDish', selectedSideDish);
            changeRoute('pizza-payment');
        }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Gostaria de adicionar algum acompanhamento ao seu pedido? (Este passo é opcional)</span>
                <StyContainerItems>
                {arraySideDish?.map((element: any, index: any) => 
                {
                  return (
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedSideDish(element)} selected={selectedSideDish === element ? true : false}>
                        <div id={`${index}-id`} key={index} >
                            <span>{element}</span>
                        </div>
                        </StyItems>
                    )  
                }
                )}
                </StyContainerItems>
                <span>Passo 5 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('pizza-filling')} title="Voltar"/>
                    <PizzariaFillButton id="button-id" action={() => handleSubmit()} title="Próximo" disable={selectedSideDish ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaSideDish;