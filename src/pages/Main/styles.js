import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const WrapperItems = styled.div`
    display: flex;
    align-items: baseline;
    
    button{
        font-size: 25px;
        font-weight: bold;
        color: #25d366;
        background: transparent;
        border: 0;
        margin-left: 15px;
    }
`;

export const Input = styled.input`
    margin-top: 45px;
    font-size: 15px;
    padding: 10px;
    width: 302px;
    color: rgb(119, 114, 114);
    border-radius: 4px;
    border: 0;

    ::placeholder{
        font-size: 15px;
    }
`;

export const TextArea = styled.textarea`
    resize: none;
    width: 340px;
    height: 80px;
    margin-top: 25px;
    font-size: 15px;
    padding: 5px;
    color: rgb(119, 114, 114);
    border-radius: 4px;
    border: 0;

    ::placeholder{
        text-align: center;
        padding-top: 8%;
        font-size: 15px;
    }
`;

export const Button = styled.button`
    background: #25d366;
    margin-top: 40px;
    height: 40px;
    width: 120px;
    border: 0;
    border-radius: 4px;
    
    a{
        text-decoration: none;
        font-weight: bold;
        font-size: 17px;
        color: white;
    }
`;