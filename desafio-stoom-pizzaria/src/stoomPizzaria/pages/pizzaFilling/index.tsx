import React, {useContext} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems } from './styles';

export const PizzaFilling: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                 <StySpanContainer>
                <span>Selecione o sabor da sua pizza e clique em "Próximo"</span>
                    <StyItems>

                    </StyItems>
                <span>Passo 4 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" onClick={() => changeRoute('pizza-size')} title="Voltar"/>
                    <PizzariaButton id="button-id" onClick={() => changeRoute('pizza-side-dish')} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaFilling;