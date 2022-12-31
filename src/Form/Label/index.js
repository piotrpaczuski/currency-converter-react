import { StyledLabelText, StyledInput } from "./styled";

const FormLabel = ({ title, selected, onChange }) => {

    return (
        <p>
            <label>
                <StyledLabelText>{title}</StyledLabelText>
                <StyledInput
                    onChange={onChange}
                    defaultValue={selected}
                >
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </StyledInput>
            </label>
        </p>
    )
}

export default FormLabel;