import { Project } from "../models/Project";
import { ProjectComponent } from "./ProjectComponent";
import '../style/projects.css'

interface IProjectProps {
  projectList: Project[];
  toggleDone: (id:number) => void;
  handleCheckbox: (id:number) => void;
  removeProject: (id: number) => void;
}


export const Projects = ({ projectList, toggleDone, handleCheckbox, removeProject }: IProjectProps) => {

  const html = projectList.map((project) => (
    <div key={project.id} className="project-div">
          <ProjectComponent project={project} toggleDone={toggleDone} handleCheckbox={handleCheckbox} removeProject={removeProject}></ProjectComponent>
      {/* <p className={`project-text ${project.isStarted ? 'ongoing' : ''} ${project.isDone ? 'done' : ''}`}>
      {/* <p className={project.isDone ? 'done' : ''}>*/}
      {/* {project.text}</p> 
      <input type='checkbox' onChange={() => handleCheckbox(project.id)}></input>
      <button onClick={() => toggleDone(project.id)}>Done</button>
      <button onClick={() => removeProject(project.id)}>Delete</button> */}
    </div>
  ))

  return <>
    <div className="heading">
      <h4>what?</h4>
      <h4>started?</h4>
      <h4>done?</h4>
      <h4>delete</h4>
    </div>
    {html}

  </>
}