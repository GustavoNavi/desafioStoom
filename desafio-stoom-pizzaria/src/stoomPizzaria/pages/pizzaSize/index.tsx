import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyContainerItems } from './styles';
import { apiPizzaSize } from '../../api/index';

export const PizzaSize: React.FC = () => {
    const { changeRoute }: any = useContext(RouteContext);
    const [state, setState] = useState<any>();
    const [arraySize, setArraySize] = useState<string[]>();
    const [selectedPizzaSize, setSelectedPizzaSize] = useState<string>('');
    //const typePastaArray: string[] = arrayPasta?.split(replce);

    useLayoutEffect(() => {
        sessionStorage.removeItem('pizzaSize');
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

        async function getPizzaTypePasta() {
            const response = await apiPizzaSize.get('');
            setArraySize(response.data);
        }

        useLayoutEffect(() => {
            getPizzaTypePasta();
        }, [state]);

        function handleSelectedPizzaSize(typePasta: string) {
            setSelectedPizzaSize(typePasta);
        }

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
                    <HstOnlyBorderButton id="button-id" action={() => changeRoute('pizza-type-of-pasta')} title="Voltar"/>
                    <PizzariaButton id="button-id" action={() =>  handleSubmit()} title="Próximo" disable={selectedPizzaSize ? false : true}/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaSize;