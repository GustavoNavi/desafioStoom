import React, {useContext, useLayoutEffect, useState} from 'react';
import PizzariaPage from '../../components/PizzariaPage';
import { RouteContext } from '../../routes/route-manager';
import { PizzariaFillButton } from '../../components/PizzariaFillButton';
import { PizzariaOnlyBorderButton } from '../../components/PizzariaOnlyBorderButton';
import { StyButtonContainer, StySpanContainer, StyItems, StyRegister, StyRow, StyInputContent } from './styles';

/**
 * @description Pizzaria Payment Page.
 */
export const PizzaPayment: React.FC = () => {

    const { changeRoute }: any = useContext(RouteContext);
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string | number>('');
    const [email, setEmail] = useState<string>('');
    const numberPattern: RegExp = /^[0-9]*$/;
    const lettersPattern: RegExp = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]+$/;

        /**
     * @description Remove sessionStorage.
     */
    useLayoutEffect(() => {
        sessionStorage.removeItem('personalInformation');
    }, []);

            /**
         * @description handle submit.
         */
    function handleSubmit() {
        sessionStorage.setItem('personalInformation', `Nome: ${name}; Endereço: ${address}; Telefone: ${phone}; Email: ${email}`);
        changeRoute('pizza-order');
    }

    function handleInputName(event: any) {
        const match: boolean = lettersPattern.test(event.target.value);
      if (match) {
        setName(event.target.value);
      }
    }

    function handleInputNumber(event: any) {
          const match: boolean = numberPattern.test(event.target.value);
          if (match) {
            setPhone(event.target.value);
          }
      }
        
        return (
            <PizzariaPage hasMargin={true} hasShadow={true}>
            <StySpanContainer>
                <span>Por favor, preencha o cadastro e selecione a forma de pagamento.</span>
                    <StyRegister id="input-container-id">
                        <StyRow id="row-1-id">
                            <StyInputContent id="input-1-id">
                                <span>Nome</span>
                                <input maxLength={50} value={name} id="input-name-id" onChange={ handleInputName}/>
                            </StyInputContent>
                            <StyInputContent id="input-2-id">
                                <span>Endereço</span>
                                <input maxLength={50} id="input-address-id" onChange={(data: any) => setAddress(data.target.value)}/>
                            </StyInputContent>
                        </StyRow>
                        <StyRow id="row-2-id">
                            <StyInputContent id="input-3-id">
                                <span>Telefone</span>
                                <input maxLength={15} value={phone} id="input-phone-id" onChange={handleInputNumber}/>
                            </StyInputContent>
                            <StyInputContent id="input-4-id">
                                <span>Email</span>
                                <input maxLength={50} id="input-email-id" onChange={(data: any) => setEmail(data.target.value)}/>
                            </StyInputContent>
                        </StyRow>
                    </StyRegister>
                    <StyItems>

                    </StyItems>
                <span>Passo 6 de 7</span>
            </StySpanContainer>
                <StyButtonContainer>
                    <PizzariaOnlyBorderButton id="button-id" action={() => changeRoute('pizza-side-dish')} title="Voltar"/>
                    <PizzariaFillButton disable={name && address && phone && email ? false : true} id="button-id" action={() => handleSubmit()} title="Próximo"/>
                </StyButtonContainer>
            </PizzariaPage>
        );
}

export default PizzaPayment;