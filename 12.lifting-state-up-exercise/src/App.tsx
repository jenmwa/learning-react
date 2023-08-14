
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

  return (
  <>
    <div>
      <span className="p-desc">excercise: Lifting state up</span>
      <h1>React Projects I want to do</h1>
    </div>
    <AddProjects createProject={addProject}></AddProjects>
    <Projects projectList={projects}></Projects>
  </>
  )
}

export default App
