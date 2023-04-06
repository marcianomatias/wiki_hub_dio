import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    color: #22272E;
    //tamanho do objeto
    width: 30%;
    height: 62px;

    margin: 10px 20px 40px 20px;
    padding: 20px;

    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        opacity: 0.9;
        cursor: pointer;
    }
`