import "./collaborator.css"
import { AiFillCloseCircle } from "react-icons/ai"

export default function Collaborator (props) {
    const {name, job, avatar/*, team*/} = props.collaborator;
    const { primaryColor, deleteCollaborator } = props;
    return  <div className="collaborator">
                <AiFillCloseCircle onClick={deleteCollaborator} className="deleteButton"></AiFillCloseCircle>
                <div className="collaboratorHeader" style={{backgroundColor: primaryColor}}>
                    <img src={avatar} alt={name}></img>
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <h5>{job}</h5>
                </div>
            </div>
}