import React, {useContext, useEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyModal, StyContainerWrapper, StyItemsOrder } from './styles';

export const PizzaOrder: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [arrayPersonalInformation, setArrayPersonalInformation] = useState<string | null>('');
    const [pizzaSizeInformation, setPizzaSizeInformation] = useState<string | null>('');
    const [pizzaTypePastaInformation, setPizzaTypePastaInformation] = useState<string | null>('');
    const [pizzaSideDishInformation, setPizzaSideDishInformation] = useState<string | null>('');
    const [pizzaFillingInformation, setPizzaFillingInformation] = useState<string | null>('');
    const [pizzaOfDayformation, setPizzaOfDayInformation] = useState<string | null>('');
    const replace: RegExp = /\s*;\s*/;
    const replace2: RegExp = /\s*,\s*/;
    const arrayPizzaDay: string[] | undefined = pizzaOfDayformation?.split(replace2);
    const arrayPersonal: string[] | undefined = arrayPersonalInformation?.split(replace);
    const [openModalState, setOpenModalState] = useState<boolean>(false);

    useEffect(() => {
        setArrayPersonalInformation(sessionStorage.getItem('personalInformation'));
        setPizzaSizeInformation(sessionStorage.getItem('pizzaSize'));
        setPizzaTypePastaInformation(sessionStorage.getItem('typePasta'));
        setPizzaSideDishInformation(sessionStorage.getItem('pizzaSideDish'));
        setPizzaFillingInformation(sessionStorage.getItem('pizzaFilling'));
        setPizzaOfDayInformation(sessionStorage.getItem('pizzaDay'));
    }, []);

    function handleSubmit() {
        if((pizzaOfDayformation || (pizzaSizeInformation && pizzaTypePastaInformation &&
            pizzaFillingInformation)) && arrayPersonalInformation) {

            setOpenModalState(true);
            
        } else {
            alert("algo deu errado. Retorne e faça o seu pedido novamente");
        }
    }

        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            {openModalState === false &&
            <StySpanContainer>
                <span>Confira seus dados e o seu pedido e clique em "Finalizar Pedido".</span>
                <span>Dados Pessoais:</span>
                    <StyItems>
                        {
                            arrayPersonal?.map((personal: string, index: any) => {
                                return (
                                    <span>{personal}</span>
                                );
                            })
                        }
                    
                    <StyItemsOrder>
                    <span>Dados do seu Pedido:</span>
                    {
                        pizzaOfDayformation && 
                        arrayPizzaDay?.map((pizzaDay: string, index: any) => {
                            return (
                                <span>{pizzaDay}</span>
                            );
                        })
                    }
                    {
                        pizzaSizeInformation && pizzaTypePastaInformation && pizzaFillingInformation && 
                        <>
                        <span>{`Tamanho da Pizza: ${pizzaSizeInformation}`}</span>
                    <span>{`Tipo da Massa: ${pizzaTypePastaInformation}`}</span>
                    <span>{`Sabor da Pizza: ${pizzaFillingInformation}`}</span>
                    <span>{`Acompanhamento: ${pizzaSideDishInformation}`}</span>
                    </>
                    }
                    </StyItemsOrder>
                    </StyItems>
                    
                <span>Passo 7 de 7</span>
            </StySpanContainer>
            }   
            {openModalState === true &&
            <StySpanContainer>
                <StyContainerWrapper>
                <StyModal>
                    <span>RECIBO</span>
                    <span>Pedido Realizado com Sucesso!</span>
                    <span>Tire um print desta tela para guardar o seu comprovante</span>
                    <span>Obrigado por escolher a pizzaria Stoom!</span>
                    <span>Dados Pessoais:</span>
                    <StyItems>
                        {
                            arrayPersonal?.map((personal: string, index: any) => {
                                return (
                                    <span>{personal}</span>
                                );
                            })
                        }
                    </StyItems>
                    <span>Dados do seu Pedido:</span>
                    {
                        pizzaOfDayformation && 
                        arrayPizzaDay?.map((pizzaDay: string, index: any) => {
                            return (
                                <span>{pizzaDay}</span>
                            );
                        })
                    }
                    {
                        pizzaSizeInformation && pizzaTypePastaInformation && pizzaFillingInformation && 
                        <>
                        <span>{`Tamanho da Pizza: ${pizzaSizeInformation}`}</span>
                    <span>{`Tipo da Massa: ${pizzaTypePastaInformation}`}</span>
                    <span>{`Sabor da Pizza: ${pizzaFillingInformation}`}</span>
                    <span>{`Acompanhamento: ${pizzaSideDishInformation}`}</span>
                    </>
                    }
                </StyModal>
                </StyContainerWrapper>
            </StySpanContainer>
            }  
            {
                openModalState === false &&
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" action={() => changeRoute('pizza-payment')} title="Voltar"/>
                    <PizzariaButton id="button-id" width="135px" title="Finalizar Pedido" action={() => handleSubmit()}/>
                </StyButtonContainer>
            }
            {
                openModalState === true &&
                <StyButtonContainer>
                    <PizzariaButton id="button-id" width="135px" title="Voltar para o Início" action={() => changeRoute('stoom-welcome')}/>
                </StyButtonContainer>
            }
                
            </PizzariaPage>
        );
}

export default PizzaOrder;