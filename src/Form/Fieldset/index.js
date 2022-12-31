import { StyledFieldset, StyledLegend } from "./styled";

const FormFieldset = ({children}) => (
    <StyledFieldset>
        <StyledLegend>Uzupełnij dane</StyledLegend>
        {children}
    </StyledFieldset>
);

export default FormFieldset;