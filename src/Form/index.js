import FormFieldset from "./FormFieldset";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormResult from "./FormResult";
import "./style.css";

const Form = () => (
    <form className="form">
        <p className="form__paragraph">Kalkulator walut</p>
        <FormFieldset>
            <FormInput
                title={"Posiadana kwota: "} 
                classes={"form__input"} 
                typeValue={"number"} 
                numberOfStep={"0.01"} 
                isRequired={true} 
            />
            <FormLabel title={"Posiadania waluta: "} selected={"PLN"} />
            <FormLabel title={"Wymagana waluta: "} selected={"EUR"} />
            <FormInput 
                title={"Obecny kurs:* "} 
                classes={"form__input form__input--noneBorder"} 
                typeValue={"text"} 
                valueInput={"Obecny kurs wynosi: 0.21"} 
                isReadOnly={true} 
            />
            <FormResult />
        </FormFieldset>
    </form>
)

export default Form;