import React, {useContext} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems } from './styles';

export const PizzaSideDish: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Gostaria de adicionar algum acompanhamento ao seu pedido? (Este passo é opcional)</span>
                    <StyItems>

                    </StyItems>
                <span>Passo 5 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" onClick={() => changeRoute('pizza-filling')} title="Voltar"/>
                    <PizzariaButton id="button-id" onClick={() => changeRoute('pizza-payment')} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaSideDish;