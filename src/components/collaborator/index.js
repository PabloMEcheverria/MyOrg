import "./collaborator.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export default function Collaborator (props) {
    const {name, id, job, avatar, like/*, team*/} = props.collaborator;
    const { primaryColor, deleteCollaborator, setLike } = props;
    return  <div className="collaborator">
                <AiFillCloseCircle onClick={() => deleteCollaborator(id)} className="deleteButton"></AiFillCloseCircle>
                <div className="collaboratorHeader" style={{backgroundColor: primaryColor}}>
                    <img src={avatar} alt={name}></img>
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <h5>{job}</h5>
                    {like ? <AiFillHeart className="likeHeart" onClick={() => setLike(id)}></AiFillHeart> : <AiOutlineHeart onClick={() => setLike(id)}></AiOutlineHeart>}
                </div>
            </div>
}