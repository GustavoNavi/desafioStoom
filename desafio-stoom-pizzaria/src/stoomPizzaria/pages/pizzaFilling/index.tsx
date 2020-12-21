import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiPizzaFilling } from '../../api/index';

export const PizzaFilling: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [state, setState] = useState<any>();
    const [arrayFilling, setArrayFilling] = useState<string[]>();
    const [selectedPizzaFilling, setSelectedPizzaFilling] = useState<string>('');
    //const typePastaArray: string[] = arrayPasta?.split(replce);

    useLayoutEffect(() => {
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        async function getPizzaTypePasta() {
            const response = await apiPizzaFilling.get('');
            setArrayFilling(response.data);
        }

        useLayoutEffect(() => {
            getPizzaTypePasta();
        }, [state]);

        function handleSelectedPizzaSize(typePasta: string) {
            setSelectedPizzaFilling(typePasta);
        }

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
                      <StyItems id={`${element}-items-id`} key={index} onClick={() => handleSelectedPizzaSize(element)} selected={selectedPizzaFilling === element ? true : false}>
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
                    <PizzariaButton id="button-id" action={() => handleSubmit()} title="Próximo" disable={selectedPizzaFilling ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaFilling;