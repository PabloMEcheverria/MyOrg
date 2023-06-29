import "./formInputComponent.css"
import "../../App.css"

const FormInputComponent = (props) => {
    return  <div className="formInputDiv">
                <label className="formLabel">{props.fieldTopic}</label>
                <input placeholder={"Ingresar " + props.fieldTopic.toLowerCase()} required={props.required} value={props.value} onChange={props.setInput}/>
            </div>
}

export default FormInputComponent