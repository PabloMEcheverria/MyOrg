import "./button.css"
import "../../App.css"

const Button = (props) => {
    return <button className="buttonForm">{props.children}</button>
}

export default Button