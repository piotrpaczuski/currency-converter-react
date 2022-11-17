import "./style.css";

const FormLabel = ({ title, selected }) => (
    <p>
        <label>
            <span className="form__labelText">{title}</span>
            <select className="form__input" defaultValue={selected}>
                <option value="PLN">PLN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </label>
    </p>
)

export default FormLabel;