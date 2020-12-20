import React, {useContext} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { StyButtonContainer } from './styles';
import { HstOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';

export const PizzaOfDay: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);

        function teste() {
            changeRoute('pizza-payment')
        }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
                <StyButtonContainer>
                    <HstOnlyBorderButton id="button-id" onClick={() => changeRoute('stoom-welcome')} title="Voltar"/>
                    <PizzariaButton id="button-id" onClick={() => teste()} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaOfDay;