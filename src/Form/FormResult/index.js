import "./style.css";

const FormResult = ({ valueElement, valueCurrency }) => (
    <>
        <p>
            <button className="form__button">Oblicz</button>
        </p>
        <p className="form__result">
            Przeliczona kwota wynosi:
            <span className="form__span section__span">{valueElement}</span>
            <span>{valueCurrency}</span>
        </p>
        <p className="form__note">*Wyświetlany kurs jest z dnia 20.10.2022</p>
    </>
);

export default FormResult;