import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    background-color: rgb(255, 234, 0);
    font-weight: 600;

    &:hover {
        background-color: hsl(55, 100%, 70%);
        cursor: pointer;
    }
`;

export const StyledResult = styled.p`
    font-size: 18px;
`;

export const StyledSpan = styled.span`
    font-weight: 700;
`;

export const StyledNote = styled.p`
    font-size: 12px;
    text-align: right;
`;