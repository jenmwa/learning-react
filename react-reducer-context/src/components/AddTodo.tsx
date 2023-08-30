import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { Button } from "./Button"
import { TodosContext } from "../contexts/TodosContext";


export const AddTodo = () => {
    const [userInput, setUserInput] = useState('');
    const { add } = useContext(TodosContext);

    const handleSubmit = (e: FormEvent) => {
       e.preventDefault()
        //anropa add
        add(userInput);
        setUserInput('');
    }


    return <>
    <form onSubmit={handleSubmit}>
        <input type='text' value={userInput} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserInput(e.target.value)
        }}></input>
        <Button clickfunction={() => {}}><>Spara</></Button>
    </form>
    </>

}