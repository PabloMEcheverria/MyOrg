import "./teamComponent.css"
import "../../App.css"
import Collaborator from "../collaborator";

export default function TeamComponent (props) {
    const {title, primaryColor, secondaryColor} = props.data;
    const background__color = {backgroundColor: secondaryColor};
    const border__Color = {borderColor: primaryColor};

    const { collaborators, deleteCollaborator } = props;
    return  <>
                {   collaborators.length > 0 &&
                    <section className="team" style={background__color}>
                        <h2 style={border__Color}>{title}</h2>
                        <div className="collaborators">
                            {collaborators.map( (collaborator, index) => <Collaborator collaborator={collaborator} key={index} primaryColor={primaryColor} deleteCollaborator={deleteCollaborator}></Collaborator>)}
                        </div>
                    </section>
                }
            </>
}