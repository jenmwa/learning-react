import { Project } from "../models/Project";
import { ProjectComponent } from "./ProjectComponent";
import '../style/projects.css'

interface IProjectProps {
  projectList: Project[];
}


export const Projects = ({ projectList }: IProjectProps) => {

  const html = projectList.map((project) => (
    <div className="project-div">
      <p key={project.id}>{project.text}</p>
      <input type="checkbox"></input>
      <button>Done</button>
    </div>
  ))

  return <>
    <div className="project-div heading">
      <h4>what?</h4>
      <h4>started?</h4>
      <h4>done?</h4>
    </div>
    {html}
    <ProjectComponent></ProjectComponent>
  </>
}