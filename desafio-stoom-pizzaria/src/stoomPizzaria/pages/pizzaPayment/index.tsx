import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaButton } from '../../components/PizzariaButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyRegister, StyRow, StyInputContent } from './styles';

export const PizzaPayment: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string | number>('');
    const [email, setEmail] = useState<string>('');

    useLayoutEffect(() => {
        sessionStorage.removeItem('personalInformation');
    }, []);

    function onSubmit() {
        sessionStorage.setItem('personalInformation', `Nome: ${name}; Endereço: ${address}; Telefone: ${phone}; Email: ${email}`);
        changeRoute('pizza-order');
    }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Por favor, preencha o cadastro e selecione a forma de pagamento.</span>
                    <StyRegister id="input-container-id">
                        <StyRow id="row-1-id">
                            <StyInputContent id="input-1-id">
                                <span>Nome</span>
                                <input id="input-name-id" onChange={(data: any) => setName(data.target.value)}/>
                            </StyInputContent>
                            <StyInputContent id="input-2-id">
                                <span>Endereço</span>
                                <input id="input-address-id" onChange={(data: any) => setAddress(data.target.value)}/>
                            </StyInputContent>
                        </StyRow>
                        <StyRow id="row-2-id">
                            <StyInputContent id="input-3-id">
                                <span>Telefone</span>
                                <input id="input-phone-id" onChange={(data: any) => setPhone(data.target.value)}/>
                            </StyInputContent>
                            <StyInputContent id="input-4-id">
                                <span>Email</span>
                                <input id="input-email-id" onChange={(data: any) => setEmail(data.target.value)}/>
                            </StyInputContent>
                        </StyRow>
                    </StyRegister>
                    <StyItems>

                    </StyItems>
                <span>Passo 6 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('pizza-side-dish')} title="Voltar"/>
                    <PizzariaButton disable={name && address && phone && email ? false : true} id="button-id" action={() => onSubmit()} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaPayment;