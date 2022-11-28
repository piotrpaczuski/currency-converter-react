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

    const xyz = {
        currencyFrom: "",
        currencyTo: "",
        resultText: "",
        setResultText(currencyFrom, currencyTo, resultText) {
            if (currencyFrom === `${this.currencyFrom}` && currencyTo === `${this.currencyTo}`) {
                setValuecurrentRate(resultText);
            }
        },
        setResult(currencyFrom, currencyTo, rate, currency) {
            if (currencyFrom === `${this.currencyFrom}` && currencyTo === `${this.currencyTo}`) {
                calculateCurrency(rate, currency);
            }
        }
    }

    const onChangeCurrency = (currencyFrom, currencyTo) => {
        setInputCurrency(currencyFrom)
        setOutputCurrency(currencyTo)

        xyz.currencyFrom = currencyFrom;
        xyz.currencyTo = currencyTo;

        xyz.setResultText("PLN", "PLN", "Wybrałeś te same waluty!")
        xyz.setResultText("PLN", "EUR", "Obecny kurs wynosi: 0.21")
        xyz.setResultText("PLN", "USD", "Obecny kurs wynosi: 0.21")
        xyz.setResultText("EUR", "PLN", "Obecny kurs wynosi: 4.77")
        xyz.setResultText("EUR", "EUR", "Wybrałeś te same waluty!")
        xyz.setResultText("EUR", "USD", "Obecny kurs wynosi: 0.98")
        xyz.setResultText("USD", "PLN", "Obecny kurs wynosi: 4.88")
        xyz.setResultText("USD", "EUR", "Obecny kurs wynosi: 1.02")
        xyz.setResultText("USD", "USD", "Wybrałeś te same waluty!")
    }

    const calculateCurrency = (rate, value) => {
        setValueElement(" " + (parseFloat(inputValue).toFixed(2) * rate).toFixed(2))
        setValueCurrency(value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        xyz.currencyFrom = inputCurrency;
        xyz.currencyTo = outputCurrency;

        xyz.setResult("PLN", "PLN", 1, " PLN")
        xyz.setResult("PLN", "EUR", 0.21, " EUR")
        xyz.setResult("PLN", "USD", 0.21, " USD")
        xyz.setResult("EUR", "PLN", 4.77, " PLN")
        xyz.setResult("EUR", "EUR", 1, " EUR")
        xyz.setResult("EUR", "USD", 0.98, " USD")
        xyz.setResult("USD", "PLN", 4.88, " PLN")
        xyz.setResult("USD", "EUR", 1.02, " EUR")
        xyz.setResult("USD", "USD", 1, " USD")
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