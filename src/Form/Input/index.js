import { StyledLabelText, StyledInput } from "./styled";

const FormInput = ({ title, typeValue, valueInput, numberOfStep, isRequired, isReadOnly, onChange }) => (
    <p>
        <label>
            <StyledLabelText>{title}</StyledLabelText>
            <StyledInput
                onChange={onChange}
                type={typeValue}
                value={valueInput}
                step={numberOfStep}
                required={isRequired}
                readOnly={isReadOnly}
                noneBorder={isReadOnly}
            />
        </label>
    </p>
)

export default FormInput;