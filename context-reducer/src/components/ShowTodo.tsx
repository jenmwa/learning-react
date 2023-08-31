import { useContext } from "react";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";
import { Todo } from "../models/Todo"
import { ActionType } from "../reducers/TodosReducer";
import '../App.css';

interface IShowTodoProps {
  todo: Todo,
}

export const ShowTodo = ({todo}: IShowTodoProps) => {

  const dispatch = useContext(TodosDispatchContext);

  const handleToggle = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    })  
  }

  const handleRemove = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    })
  }

  return <>
    <span className={todo.isDone ? 'done' : ''} onClick={() => handleToggle(todo.id)}>{todo.text}</span>
    <button onClick={() => handleRemove(todo.id)}>X</button><br></br>
  </>
}