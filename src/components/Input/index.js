import "./Input.css"
import "../../App.css"

const Input = (props) => {
    const { type = "text" } = props;

    return  <div className={`Input Input-${type}`}>
                <label className="formLabel">{props.fieldTopic}</label>
                <input  placeholder={"Ingresar " + props.fieldTopic.toLowerCase()} 
                        required={props.required} 
                        value={props.value} 
                        onChange={props.setInput} 
                        type={type}
                />
            </div>
}

export default Input