import React, {useContext} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems } from './styles';

export const PizzaOrder: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Confira seus dados e o seu pedido e clique em "Finalizar Pedido".</span>
                    <StyItems>

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