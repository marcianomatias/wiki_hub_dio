import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;
    margin-bottom: 20px;
    background-color: #272e38;
    border: 5px solid #2c343e;
    padding: 20px;
    border-radius: 20px;

    h3{
        font-size: 32px;
        color: #FAFAFA;

    }

    p{
        font-size: 20px;
        margin: 20px 0;
    }

    p.repoDescription{
        font-size: 22px;
        width: 80%;
        color: #c6c8cb;
        margin-bottom: 40px;
    }

    a.repoUser{
        color: #b90e35;
        text-decoration: none;
    }

    a.button{
        align-items: center;
        justify-content: center;

        //Texto
        font-weight: 700;
        text-decoration: none;
        background-color: #FFF;
        color: #22272E;
        border-radius: 20px;

        //tamanho do objeto
        width: 15%;
        height: 28px;
        padding: 20px;
    }

    a.remove{
        color: #FFF;
        background-color: #b90e35;
        margin-left: 15px;
        &:hover{
            color:#22272e;
            transition: 250ms;
        }
    }

    hr{
        margin-top: 20px;
        visibility: hidden;
    }
    
`