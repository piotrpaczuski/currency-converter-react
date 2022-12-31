import styled, { css } from "styled-components";

export const StyledLabelText = styled.span`
    width: 150px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const StyledInput = styled.input`
    border-radius: 5px;
    padding: 10px;
    border-color: grey;
    max-width: 400px;
    width: 100%;

    ${({noneBorder}) => noneBorder && css`
        border: none;

        &:focus-visible {
            outline: none;
        }
    `}
`;