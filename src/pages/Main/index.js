import React, {useState} from 'react';

import Logo from '../../assets/WhatsTalk.png';
import {Container,WrapperItems, Input, TextArea, Button} from './styles';

const Main = () => {
     const [inputNumberValue, setInputNumberValue] = useState('');
     const [inputTextValue, setInputTextValue] = useState('');
     const [linkValue, setLinkValue] = useState('');

     const handleSubmit = () => {
        const numberPhone = inputNumberValue;
        const numberFilter = numberPhone.replace(/[^\d]+/g, '');

        const link = (inputTextValue ? 
            'https://web.whatsapp.com/send?phone=' + numberFilter + '&text=' + inputTextValue :
            'https://web.whatsapp.com/send?phone=' + numberFilter
        );

        setLinkValue(link);
     }

    return(
        <Container>
            <img src={Logo} alt="WhatsTalk"/>

            <WrapperItems>
                <Input
                    type="text"
                    placeholder="+55 (99) 9 9999-9999"
                    onChange={(e) => {
                        setInputNumberValue(e.target.value);
                    }}
                />

                <button title="Código do país, DDD e número de telefone com o 9 a mais.">?</button>
            </WrapperItems>

            <TextArea 
                type="text"
                placeholder="Caso deseje, envie alguma mensagem para seu contato"
                onChange={(e) => {
                    setInputTextValue(e.target.value);
                }}
            />

            <Button onClick={handleSubmit}>
                <a href={linkValue} target="_blank" rel="noopener noreferrer">Gerar</a>
            </Button>
      </Container>
    )
}

export default Main;