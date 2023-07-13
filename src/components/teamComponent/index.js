import "./teamComponent.css"
import "../../App.css"
import Collaborator from "../collaborator";
import hexToRgba from 'hex-to-rgba';
//import rgbToHex from 'rgba-to-hex-colors';
//const { rgbToHex } = require('rgba-to-hex-colors');
import rgbHex from 'rgb-hex';

export default function TeamComponent (props) {
    const {title, id, primaryColor/*, secondaryColor*/} = props.data;
    const background__color = {backgroundColor: hexToRgba(primaryColor, 0.6)};
    const border__Color = {borderColor: primaryColor};

    const { collaborators, deleteCollaborator, updateColorTitle, setLike } = props;
    return  <>
                {   collaborators.length > 0 &&
                    <section className="team" style={background__color}>
                        <input 
                            type="color" 
                            value={primaryColor} 
                            onChange={(event) => {
                                updateColorTitle(event.target.value, id);
                            }} 
                            className="inputColor"
                        ></input>
                        <h3 style={border__Color}>{title}</h3>
                        <div className="collaborators">
                            {collaborators.map( (collaborator, index) => <Collaborator collaborator={collaborator} key={index} primaryColor={primaryColor} deleteCollaborator={deleteCollaborator} setLike={setLike}></Collaborator>)}
                        </div>
                    </section>
                }
            </>
}