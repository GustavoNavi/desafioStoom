import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { StyButtonContainer, StySpanContainer, StySpanButton } from './styles';

export const PizzaWelcome: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);

    useLayoutEffect(() => {
        sessionStorage.removeItem('typePasta');
        sessionStorage.removeItem('pizzaSize');
        sessionStorage.removeItem('pizzaFilling');
        sessionStorage.removeItem('pizzaDay');
        sessionStorage.removeItem('pizzaSideDish');
        sessionStorage.removeItem('personalInformation');
    }, []);

    return (
        <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Seja bem vindo(a) a Pizzaria da Stoom</span>
                    <StySpanButton>
                        <span>Antes de continuar, temos a nossa pizza do dia, que ao você adquirir, receberá pontos de benefícios. Basta clicar no botão "Eu Quero" e você será redirecionado.</span>
                        <PizzariaButton id="button-id" action={() => changeRoute('pizza-of-day')} width="125px" title="Eu Quero"/>
                    </StySpanButton>
                <span>Mas caso você queira montar a sua pizza, basta clicar no botão "Próximo"</span>
                <span>Passo 1 de 7</span>
            </StySpanContainer>
            <StyButtonContainer>
                <PizzariaButton id="button-id" action={() => changeRoute('pizza-type-of-pasta')} title="Próximo"/>
            </StyButtonContainer>
        </PizzariaPage>
    );
}

export default PizzaWelcome;