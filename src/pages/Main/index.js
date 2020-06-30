import React, {useState} from 'react';

import Logo from '../../assets/WhatsTalk.png';
import Form from '../../components/Form';
import {Container} from './styles';

const Main = () => {
     const [inputNumberValue, setInputNumberValue] = useState('');
     const [inputTextValue, setInputTextValue] = useState('');
     const [linkValue, setLinkValue] = useState('');

     const handleSubmit = () => {
        const numberPhone = inputNumberValue;
        const numberFilter = numberPhone.replace(/[^\d]+/g, '');

        const link = (inputTextValue ? 
            'https://web.whatsapp.com/send?phone=55' + numberFilter + '&text=' + inputTextValue :
            'https://web.whatsapp.com/send?phone=55' + numberFilter
        );

        setLinkValue(link);
     }

    return(
        <Container>
            <img src={Logo} alt="WhatsTalk"/>
            <p>Envie mensagem para quem quiser, sem adiciona-lo nos seus contatos!</p>
            <Form 
                link={linkValue} 
                submit={handleSubmit}
                inputNumber = {e => setInputNumberValue(e.target.value)}
                inputText = {e => setInputTextValue(e.target.value)}
            />
      </Container>
    )
}

export default Main;
