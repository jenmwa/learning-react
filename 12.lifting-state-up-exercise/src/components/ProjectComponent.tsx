import { Project } from "../models/Project"

interface IShowProjectProps {
    project: Project;
    toggleDone: (id:number) => void;
    handleCheckbox: (id:number) => void;
    removeProject: (id: number) => void;
}

export const ProjectComponent = ({project, toggleDone, handleCheckbox, removeProject}: IShowProjectProps) => {

    return <>
     <p className={`project-text ${project.isStarted ? 'ongoing' : ''} ${project.isDone ? 'done' : ''}`}>
      {/* <p className={project.isDone ? 'done' : ''}>*/}
      {project.text}</p> 
      <input type='checkbox' onChange={() => handleCheckbox(project.id)}></input>
      <button onClick={() => toggleDone(project.id)}>Done</button>
      <button onClick={() => removeProject(project.id)}>Delete</button>
    </>
}