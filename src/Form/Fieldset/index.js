import "./style.css";

const FormFieldset = ({children}) => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">Uzupełnij dane</legend>
        {children}
    </fieldset>
);

export default FormFieldset;