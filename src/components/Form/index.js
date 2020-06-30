import React from 'react';

import {Container, WrapperItems, Input, TextArea, TextLink} from './styles';

const Form = (props) => {
    return(
        <Container>
            <WrapperItems>
                <Input
                    type="text"
                    placeholder="(99) 9 9999-9999"
                    onChange={props.inputNumber}
                />

                <button title="Digite o DDD e número de telefone com o 9 a mais.">?</button>
            </WrapperItems>

            <TextArea 
                type="text"
                placeholder="Caso deseje, envie alguma mensagem para seu contato"
                onChange={props.inputText}
            />

            <TextLink href={props.link} target="_blank" rel="noopener noreferrer">
                <button onClick={props.submit}>
                    Gerar
                </button>
            </TextLink>
        </Container>
    )
}

export default Form;

