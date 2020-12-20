import React, {useContext, useEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems } from './styles';

export const PizzaOrder: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [arrayPersonalInformation, setArrayPersonalInformation] = useState<string | null>('');
    const replace: RegExp = /\s*;\s*/;
    const arrayPersonal: string[] | undefined = arrayPersonalInformation?.split(replace);

    useEffect(() => {
        setArrayPersonalInformation(sessionStorage.getItem('personalInformation'));
    }, []);
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
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

                    </StyItems>
                <span>Passo 7 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" onClick={() => changeRoute('pizza-payment')} title="Voltar"/>
                    <PizzariaButton id="button-id" width="135px" title="Finalizar Pedido"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaOrder;