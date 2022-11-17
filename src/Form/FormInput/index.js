import "./style.css";

const FormInput = ({ title, classes, typeValue, valueInput, numberOfStep, isRequired, isReadOnly }) => (
    <p>
        <label>
            <span className="form__labelText">{title}</span>
            <input className={classes} type={typeValue} value={valueInput} step={numberOfStep} required={isRequired} readOnly={isReadOnly} />
        </label>
    </p>
)

export default FormInput;