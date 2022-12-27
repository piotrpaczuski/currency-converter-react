import { useState } from "react";
import FormFieldset from "./Fieldset";
import FormInput from "./Input";
import FormLabel from "./Label";
import FormResult from "./Result";
import ActuallyDate from "./Clock";
import "./style.css";

const Form = () => {

    const [inputValue, setInputValue] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [valueCurrentRate, setValueCurrentRate] = useState("Obecny kurs wynosi: 0.21")
    const [valueElement, setValueElement] = useState(" N/A");
    const [valueCurrency, setValueCurrency] = useState("");

    const setResults = {
        currencyFrom: "",
        currencyTo: "",
        resultText: "",
        setCurrentRate(currencyFrom, currencyTo, resultText) {
            if (currencyFrom === `${this.currencyFrom}` && currencyTo === `${this.currencyTo}`) {
                setValueCurrentRate(resultText);
            };
        },
        setResult(currencyFrom, currencyTo, rate, currency) {
            if (currencyFrom === `${this.currencyFrom}` && currencyTo === `${this.currencyTo}`) {
                calculateCurrency(rate, currency);
            };
        },
    };

    const onChangeCurrency = (currencyFrom, currencyTo) => {
        setInputCurrency(currencyFrom);
        setOutputCurrency(currencyTo);

        setResults.currencyFrom = currencyFrom;
        setResults.currencyTo = currencyTo;

        setResults.setCurrentRate("PLN", "PLN", "Wybrałeś te same waluty!");
        setResults.setCurrentRate("PLN", "EUR", "Obecny kurs wynosi: 0.21");
        setResults.setCurrentRate("PLN", "USD", "Obecny kurs wynosi: 0.21");
        setResults.setCurrentRate("EUR", "PLN", "Obecny kurs wynosi: 4.77");
        setResults.setCurrentRate("EUR", "EUR", "Wybrałeś te same waluty!");
        setResults.setCurrentRate("EUR", "USD", "Obecny kurs wynosi: 0.98");
        setResults.setCurrentRate("USD", "PLN", "Obecny kurs wynosi: 4.88");
        setResults.setCurrentRate("USD", "EUR", "Obecny kurs wynosi: 1.02");
        setResults.setCurrentRate("USD", "USD", "Wybrałeś te same waluty!");
    };

    const calculateCurrency = (rate, value) => {
        setValueElement(" " + (parseFloat(inputValue).toFixed(2) * rate).toFixed(2));
        setValueCurrency(value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        setResults.currencyFrom = inputCurrency;
        setResults.currencyTo = outputCurrency;

        setResults.setResult("PLN", "PLN", 1, " PLN");
        setResults.setResult("PLN", "EUR", 0.21, " EUR");
        setResults.setResult("PLN", "USD", 0.21, " USD");
        setResults.setResult("EUR", "PLN", 4.77, " PLN");
        setResults.setResult("EUR", "EUR", 1, " EUR");
        setResults.setResult("EUR", "USD", 0.98, " USD");
        setResults.setResult("USD", "PLN", 4.88, " PLN");
        setResults.setResult("USD", "EUR", 1.02, " EUR");
        setResults.setResult("USD", "USD", 1, " USD");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p className="form__paragraph">Kalkulator walut</p>
            <FormFieldset>
                <ActuallyDate />
                <FormInput
                    title={"Posiadana kwota: "}
                    classes={"form__input"}
                    typeValue={"number"}
                    numberOfStep={"0.01"}
                    isRequired={true}
                    valueInput={inputValue}
                    onChange={({ target }) => {
                        if (!(target.value.charAt(0) === "-")) {
                            setInputValue(target.value);
                            console.log(inputValue);
                        };
                    }}
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