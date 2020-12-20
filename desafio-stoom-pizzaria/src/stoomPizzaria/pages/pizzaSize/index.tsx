import React, {useContext} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems } from './styles';

export const PizzaSize: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                <StySpanContainer>
                <span>Escolha o tamanho da pizza e clique em "Próximo"</span>
                    <StyItems>

                    </StyItems>
                <span>Passo 3 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" onClick={() => changeRoute('pizza-type-of-pasta')} title="Voltar"/>
                    <PizzariaButton id="button-id" onClick={() =>  changeRoute('pizza-filling')} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaSize;