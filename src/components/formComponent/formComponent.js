import { useState } from "react"
import "./formComponent.css"
import FormInputComponent from "../formInputComponent"
import FormSelectComponent from "../formSelectComponent"
import Button from "../button"

const FormComponent = (props) => {

    const { registerCollaborator, registerTeam } = props;

    const submitCollaboratorForm = (event) => {
        event.preventDefault();
        const newCollaborator = {
            name, 
            job, 
            avatar, 
            team
        }
        registerCollaborator(newCollaborator);
    }

    const submitTeamForm = (event) => {
        event.preventDefault();
        const newTeam = {
            title, 
            primaryColor: color
        }
        registerTeam(newTeam);
    }

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [avatar, setAvatar] = useState("");
    const [team, setTeam] = useState("");
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const setNameInput = event => setName(event.target.value);
    const setJobInput = event => setJob(event.target.value);
    const setAvatarInput = event => setAvatar(event.target.value);
    const setTitleInput = event => setTitle(event.target.value);
    const setColorInput = event => setColor(event.target.value);

    return  <section className ="collaboratorForm">
                <form onSubmit={submitCollaboratorForm}>
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
                <form onSubmit={submitTeamForm}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <FormInputComponent 
                        fieldTopic="Nombre del equipo" 
                        required 
                        value={title} 
                        setInput={setTitleInput}
                    />
                    <FormInputComponent 
                        fieldTopic="Color" 
                        required 
                        value={color}
                        setInput={setColorInput}
                    />
                    <Button>
                        Registrar equipo
                    </Button>
                </form>
            </section>
}

export default FormComponent