import '../App.css';
import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext"
import { Button } from "./Button"



export const Todos = () => {

    const { todos, toggle, remove } = useContext(TodosContext)

    return <>
        <ul>
            {todos.map((todo) =>
            <>
                <li key={todo.id} className={todo.isDone ? 'done' : ''} onClick={() => toggle(todo.id)}>
                    {todo.text}
                    
                </li>
                <Button clickfunction={() => remove(todo.id)}><>X</></Button>
                </>
            )}
        </ul>
    </>
}