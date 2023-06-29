import "./myOrgComponent.css"
import "../../App.css"

const MyOrgComponent = (props) => {
    return  <section className="myOrganization">
                <h3>Mi organización</h3>
                <img src="img/add.png" alt="Add button" onClick={props.addEvent}></img>
            </section>
}

export default MyOrgComponent