import { useState } from 'react';
import './App.css';
import HeaderComponent from './components/headerComponent/headerComponent.js';
import FormComponent from './components/formComponent/formComponent.js';
import MyOrgComponent from './components/myOrgComponent';
import TeamComponent from './components/teamComponent';
import Footer from './components/footer';

function App() {
  
  let teamsArray = [
    {title: "Programación", primaryColor: "#57C278", secondaryColor: "#D9F7E9"}, 
    {title: "Front End", primaryColor: "#82CFFA", secondaryColor: "#E8F8FF"}, 
    {title: "Data Science", primaryColor: "#A6D157", secondaryColor: "#F0F8E2"}, 
    {title: "Devops", primaryColor: "#E06B69", secondaryColor: "#FDE7E8"}, 
    {title: "UX y Diseño", primaryColor: "#DB6EBF", secondaryColor: "#FAE9F5"}, 
    {title: "Móvil", primaryColor: "#FFBA05", secondaryColor: "#FFF5D9"}, 
    {title: "Innovación y Gestión", primaryColor: "#FF8A29", secondaryColor: "#FFEEDF"}
  ]

  const [formDisplay, setFormDisplay] = useState(false);
  const [collaborators, setCollaborators] = useState([]);
  const addEvent = () => {
    setFormDisplay(!formDisplay);
  }

  const registerCollaborator = (newCollaborator) => {
    setCollaborators([...collaborators, newCollaborator]);
  }

  return (
    <div className="App">
       <HeaderComponent />
       {formDisplay && <FormComponent data={teamsArray.map(team => team.title)} registerCollaborator={registerCollaborator}/>}
       <MyOrgComponent addEvent={addEvent} />
       {
        teamsArray.map( team => 
        <TeamComponent 
          data={team} 
          key={team.title} 
          collaborators={collaborators.filter( collaborator => collaborator.team === team.title)}>
        </TeamComponent>)
       }
       <Footer></Footer>
    </div>
  );
}

export default App;
