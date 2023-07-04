import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import HeaderComponent from './components/headerComponent/headerComponent.js';
import FormComponent from './components/formComponent/formComponent.js';
import MyOrgComponent from './components/myOrgComponent';
import TeamComponent from './components/teamComponent';
import Footer from './components/footer';

function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuid(), 
      name: "Harland Lohora", 
      job: "Instructor", 
      avatar: "https://github.com/harlandlohora.png", 
      team: "Front End"
    }, 
    {
      id: uuid(), 
      name: "Genesys Rondón", 
      job: "Desarrolladora de software e instructora", 
      avatar: "https://github.com/genesysaluralatam.png", 
      team: "Programación"
    }, 
    {
      id: uuid(), 
      name: "Jeanmarie Quijada", 
      job: "Instructora en Alura latam", 
      avatar: "https://github.com/JeanmarieAluraLatam.png", 
      team: "UX y Diseño"
    }, 
    {
      id: uuid(), 
      name: "Christian Velasco", 
      job: "Head de Alura e instructor", 
      avatar: "https://github.com/christianpva.png", 
      team: "Programación"
    }, 
    {
      id: uuid(), 
      name: "Jose Gonzalez", 
      job: "Dev FullStack", 
      avatar: "https://github.com/JoseDarioGonzalezCha.png", 
      team: "Innovación y Gestión"
    }
  ]);
  const [teams, setTeams] = useState([
    {id: uuid(), title: "Programación", primaryColor: "#57C278", secondaryColor: "#D9F7E9"}, 
    {id: uuid(), title: "Front End", primaryColor: "#82CFFA", secondaryColor: "#E8F8FF"}, 
    {id: uuid(), title: "Data Science", primaryColor: "#A6D157", secondaryColor: "#F0F8E2"}, 
    {id: uuid(), title: "Devops", primaryColor: "#E06B69", secondaryColor: "#FDE7E8"}, 
    {id: uuid(), title: "UX y Diseño", primaryColor: "#DB6EBF", secondaryColor: "#FAE9F5"}, 
    {id: uuid(), title: "Móvil", primaryColor: "#FFBA05", secondaryColor: "#FFF5D9"}, 
    {id: uuid(), title: "Innovación y Gestión", primaryColor: "#FF8A29", secondaryColor: "#FFEEDF"}
  ]);
  const addEvent = () => {
    setFormDisplay(!formDisplay);
  }

  const registerCollaborator = (newCollaborator) => {
    setCollaborators([...collaborators, newCollaborator]);
  }

  const deleteCollaborator = (id) => {
    const updatedCollaborators = collaborators.filter( collaborator => collaborator.id !== id);
    setCollaborators(updatedCollaborators);
  }

  const updateColorTitle = (color, id) => {
    const updatedTeams = teams.map( team => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team
    });
    setTeams(updatedTeams);
  }

  const registerTeam = (newTeam) => {
    newTeam.id = uuid();
    setTeams([...teams, newTeam]);
  }

  return (
    <div className="App">
       <HeaderComponent />
       {
          formDisplay && <FormComponent 
            data={teams.map(team => team.title)} 
            registerCollaborator={registerCollaborator} 
            registerTeam={registerTeam}
          />
        }
       <MyOrgComponent addEvent={addEvent} />
       {
        teams.map( team => 
        <TeamComponent 
          data={team} 
          key={team.title} 
          collaborators={collaborators.filter( collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColorTitle={updateColorTitle}>
        </TeamComponent>)
       }
       <Footer></Footer>
    </div>
  );
}

export default App;
