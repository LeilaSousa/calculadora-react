import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #6b544a;
    background-color: #f7f2dd;
    color: #6b544a;
    font-size: 24px;
    font-weight: 700;
    flex:1;

    &:hover{
        opacity: 0.7;
    }

    ${({variant}) => variant !== "primary" && css`

    padding: 20px;
    border: 1px solid #6b544a;
    background-color: #a9c6c1;
    color: ##6b544a;
    font-size: 24px;
    font-weight: 700;
    flex:1;

    &:hover{
        opacity: 0.7;
    }
    
    `}
`