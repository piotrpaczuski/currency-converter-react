import "./style.css";

const FormResult = () => (
    <>
        <p>
            <button className="form__button">Oblicz</button>
        </p>
        <p className="form__result">
            Przeliczona kwota wynosi:
            <span className="form__span section__span">N/N</span><span className=""></span>
        </p>
        <p className="form__note">*Wyświetlany kurs jest z dnia 20.10.2022</p>
    </>
);

export default FormResult;