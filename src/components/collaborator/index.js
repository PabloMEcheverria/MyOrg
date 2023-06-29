import "./collaborator.css"

export default function Collaborator (props) {
    const {name, job, avatar/*, team*/} = props.collaborator;
    return  <div className="collaborator">
                <div className="collaboratorHeader" style={{backgroundColor: props.primaryColor}}>
                    <img src={avatar} alt={name}></img>
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <h5>{job}</h5>
                </div>
            </div>
}