import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
