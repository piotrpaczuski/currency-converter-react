// import "./style.css";
import { StyledButton, StyledResult, StyledSpan, StyledNote } from "./styled";

const FormResult = ({ valueElement, valueCurrency }) => (
    <>
        <p>
            <StyledButton>Oblicz</StyledButton>
        </p>
        <StyledResult>
            Przeliczona kwota wynosi:
            <StyledSpan>
                {valueElement}
            </StyledSpan>
            <span>
                {valueCurrency}
            </span>
        </StyledResult>
        <StyledNote>
            *Wyświetlany kurs jest z dnia 20.10.2022
        </StyledNote>
    </>
);

export default FormResult;