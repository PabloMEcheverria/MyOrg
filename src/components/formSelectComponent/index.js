import "./formSelectComponent.css"
import "../../App.css"
const FormSelectComponent = (props) => {

    const teamsArray = props.data;

    const selectValue = event => {
        props.setTeam(event.target.value);
    }

    return  <div className="formSelect">
                <label className="formLabel">Equipo</label>
                <select value={props.value} onChange={selectValue}>
                    <option value="" defaultValue="" disabled hidden>Seleccionar equipo</option>
                    {teamsArray.map((team, index) => {
                        return <option key={index} value={team}>{team}</option>
                    })}
                </select>
            </div>
}

export default FormSelectComponent