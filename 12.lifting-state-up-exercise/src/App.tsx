
import { useState } from 'react'
import './App.css'
import { AddProjects } from './components/AddProjects'
import { Projects } from './components/Projects'
import { Project } from './models/Project'

function App() {
  const [projects, setProjects] = useState<Project[]>([
    new Project(1,'test1', false, false),
    new Project(2,'test2',false,false)
  ]);

  const addProject = (textFromInput: string) => {
    setProjects([...projects, new Project(Date.now(), textFromInput, false, false)])
  }

  const toggleDone = (id: number) => {
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          project.isDone = !project.isDone;
        }
        return project;
      })
    );
  };

  const handleCheckbox = (id: number) => {
    setProjects(
      projects.map((project) => {
        if(project.id === id) {
          project.isStarted = !project.isStarted
        }
        return project;
      })
    )
  }

  const removeProject = (id: number) => {
    setProjects(
      projects.filter((project) => project.id !== id)
    )
  }

  return (
  <>
    <div>
      <span className="p-desc">excercise: Lifting state up</span>
      <h1>React Projects I want to do</h1>
    </div>
    <AddProjects createProject={addProject}></AddProjects>
    <Projects projectList={projects} toggleDone={toggleDone} handleCheckbox={handleCheckbox} removeProject={removeProject}></Projects>
  </>
  )
}

export default App
