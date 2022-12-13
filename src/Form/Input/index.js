import "./style.css";

const FormInput = ({ title, classes, typeValue, valueInput, numberOfStep, isRequired, isReadOnly, onChange }) => (
    <p>
        <label>
            <span className="form__labelText">{title}</span>
            <input
                onChange={onChange}
                className={classes}
                type={typeValue}
                value={valueInput}
                step={numberOfStep}
                required={isRequired}
                readOnly={isReadOnly} />
        </label>
    </p>
)

export default FormInput;