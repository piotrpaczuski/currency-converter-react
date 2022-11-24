import { useState } from "react";
import FormFieldset from "./FormFieldset";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormResult from "./FormResult";
import "./style.css";

const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [valueCurrentRate, setValuecurrentRate] = useState("Obecny kurs wynosi: 0.21")
    const [valueElement, setValueElement] = useState(" N/A");
    const [valueCurrency, setValueCurrency] = useState("");

    const onChangeCurrency = (currencyFrom, currencyTo) => {
        setInputCurrency(currencyFrom)
        setOutputCurrency(currencyTo)

        switch (currencyFrom) {
            case "PLN":
                switch (currencyTo) {
                    case "PLN":
                        return setValuecurrentRate("Wybrałeś te same waluty!");
                    case "EUR":
                        return setValuecurrentRate("Obecny kurs wynosi: 0.21");
                    case "USD":
                        return setValuecurrentRate("Obecny kurs wynosi: 0.21");
                    default:
                        return;
                }
            case "EUR":
                switch (currencyTo) {
                    case "PLN":
                        return setValuecurrentRate("Obecny kurs wynosi: 4.77");
                    case "EUR":
                        return setValuecurrentRate("Wybrałeś te same waluty!");
                    case "USD":
                        return setValuecurrentRate("Obecny kurs wynosi: 0.98");
                    default:
                        return;
                }
            case "USD":
                switch (currencyTo) {
                    case "PLN":
                        return setValuecurrentRate("Obecny kurs wynosi: 4.88");
                    case "EUR":
                        return setValuecurrentRate("Obecny kurs wynosi: 1.02");
                    case "USD":
                        return setValuecurrentRate("Wybrałeś te same waluty!");
                    default:
                        return;
                }
            default:
                return;
        }
    }

    const calculateCurrency = (rate, value) => {
        setValueElement(" " + (parseFloat(inputValue).toFixed(2) * rate).toFixed(2))
        setValueCurrency(value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        switch (inputCurrency) {
            case "PLN":
                switch (outputCurrency) {
                    case "PLN":
                        return calculateCurrency(1, " PLN");
                    case "EUR":
                        return calculateCurrency(0.21, " EUR");
                    case "USD":
                        return calculateCurrency(0.21, " USD");
                    default:
                        return;
                }
            case "EUR":
                switch (outputCurrency) {
                    case "PLN":
                        return calculateCurrency(4.77, " PLN");
                    case "EUR":
                        return calculateCurrency(1, " EUR");
                    case "USD":
                        return calculateCurrency(0.98, " USD");
                    default:
                        return;
                }
            case "USD":
                switch (outputCurrency) {
                    case "PLN":
                        return calculateCurrency(4.88, " PLN");
                    case "EUR":
                        return calculateCurrency(1.02, " EUR");
                    case "USD":
                        return calculateCurrency(1, " USD");
                    default:
                        return;
                }
            default:
                return;
        }
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p className="form__paragraph">Kalkulator walut</p>
            <FormFieldset>
                <FormInput
                    title={"Posiadana kwota: "}
                    classes={"form__input"}
                    typeValue={"number"}
                    numberOfStep={"0.01"}
                    isRequired={true}
                    valueInput={inputValue}
                    onChange={({ target }) =>
                        setInputValue(target.value)
                    }
                />
                <FormLabel
                    title={"Posiadania waluta: "}
                    selected={inputCurrency}
                    onChange={({ target }) => {
                        onChangeCurrency(target.value, outputCurrency);
                    }}
                />
                <FormLabel
                    title={"Wymagana waluta: "}
                    selected={outputCurrency}
                    onChange={({ target }) => {
                        onChangeCurrency(inputCurrency, target.value);
                    }
                    }
                />
                <FormInput
                    title={"Obecny kurs:* "}
                    classes={"form__input form__input--noneBorder"}
                    typeValue={"text"}
                    valueInput={valueCurrentRate}
                    isReadOnly={true}
                />
                <FormResult
                    valueElement={valueElement}
                    valueCurrency={valueCurrency}
                />
            </FormFieldset>
        </form>
    )
}

export default Form;