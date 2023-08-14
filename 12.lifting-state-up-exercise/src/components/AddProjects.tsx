import { ChangeEvent, FormEvent, useState } from "react";

interface IAddProjectProps {
  createProject: (textFromInput: string) => void
}

export const AddProjects = ({createProject}: IAddProjectProps) => {

  const [projectInput, setProjectInput] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectInput(e.target.value);
  }

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    createProject(projectInput);
    setProjectInput('');
  }

  return <>
    <p>component AddProject</p>
    <form onSubmit={handleAdd}>
      <input type="text" onChange={handleOnChange} value={projectInput}></input>
      <button type="submit">Create</button>
    </form>

  </>
} 