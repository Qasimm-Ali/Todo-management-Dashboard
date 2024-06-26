import { useState } from "react";
import InputProjects from "./Components/InputProjects";
import NoProjects from "./Components/NoProjects";
import Sidebar from "./Components/Sidebar";

export default function App(){
  const [handleProject, sethandleProject] = useState({
    handleProjectState : false,
    Projects : []
  })
  const handleOpenProject = () =>{
    sethandleProject(prevStates => {
      return{
        ...prevStates,
        handleProjectState : true
      }
    })
  }
  const handleCancelProject = () => {
    sethandleProject(prevStates => {
      return{
        ...prevStates,
        handleProjectState : false
      }
    })
  }
  const handleSaveProject =  (projects) => {
    const newProject = {
      ...projects
    }
    sethandleProject(prevStates => {
      return {
        ...prevStates,
        handleProjectState : false,
        Projects : [...prevStates.Projects, newProject ]
      }
    })
  }
  let content ; 
  if(handleProject.handleProjectState === false){
    content = <NoProjects onClick={handleOpenProject}/> 
  }else if(handleProject.handleProjectState === true){
    content = <InputProjects  onAdd={handleSaveProject} onCancel={handleCancelProject}/>
  }
  
  return(<>
  <main className="flex h-screen ">
  <Sidebar onClick={handleOpenProject} listOfProjects={handleProject.Projects} />
  {content}
  </main>
  </>)
}