import { useState } from "react"
import "./formComponent.css"
import FormInputComponent from "../formInputComponent"
import FormSelectComponent from "../formSelectComponent"
import Button from "../button"

const FormComponent = (props) => {

    const { registerCollaborator } = props;

    const submitBehavior = (event) => {
        event.preventDefault();
        let newCollaborator = {
            name, 
            job, 
            avatar, 
            team
        }
        registerCollaborator(newCollaborator);
    }

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [avatar, setAvatar] = useState("");
    const [team, setTeam] = useState("");

    const setNameInput = event => setName(event.target.value);
    const setJobInput = event => setJob(event.target.value);
    const setAvatarInput = event => setAvatar(event.target.value);

    return  <section className ="collaboratorForm">
                <form onSubmit={submitBehavior}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <FormInputComponent 
                        fieldTopic="Nombre" 
                        required 
                        value={name} 
                        setInput={setNameInput}
                    />
                    <FormInputComponent 
                        fieldTopic="Puesto" 
                        required 
                        value={job}
                        setInput={setJobInput}
                    />
                    <FormInputComponent 
                        fieldTopic="Foto" 
                        required 
                        value={avatar}
                        setInput={setAvatarInput}
                    />
                    <FormSelectComponent 
                        value={team} 
                        setTeam={setTeam}
                        data={props.data}
                    />
                    <Button>Crear</Button>
                </form>
            </section>
}

export default FormComponent