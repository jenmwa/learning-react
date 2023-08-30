/* eslint-disable @typescript-eslint/no-unused-vars */
import '../App.css'
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { Todo } from "../models/Todo";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { TodosReducer } from '../reducers/TodosReducer';


// export const TodoApp = () => {
//   const [todos, setTodos] = useState<ITodosContext>({
//     todos: [],
//     add: (text: string) => {},
//     toggle: (id: number) => {},
//     remove: (id: number) => {},
//   });

//   todos.add = (text: string) => {
//     setTodos({...todos,
//       todos: [...todos.todos, new Todo(new Date().getTime(), text, false)]
//     })
//   }

//   todos.toggle = (id: number) => {
//     setTodos({...todos,
//       todos: todos.todos.map((todo) => {
//         if(todo.id === id) {
//           todo.isDone = !todo.isDone;
//         }
//         return todo;
//       })
//     })
//   }

//   todos.remove = (id: number) => {
//     setTodos({...todos,
//     todos: todos.todos.filter((todo) => 
//       todo.id !== id)
//     })
//   } 


//   return <>
//     <TodosContext.Provider value={todos}>
//       <AddTodo></AddTodo>
//       <Todos></Todos>
//     </TodosContext.Provider>
//   </>;

// }

export const TodoApp = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodosReducer, [])
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // setTodos([...todos, new Todo(new Date().getTime(), userInput, false)])
    dispatch({
      type: 'ADDED',
      payload: userInput,
    })
    setUserInput('')
  }

  const toggleTodo = (id: number) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === id) todo.isDone = !todo.isDone;
    //     return todo;
    //   }))
    dispatch({
      type: 'TOGGLED',
      payload: id.toString()
    })
  }

  const removeTodo = (id: number) => {
    // setTodos(
    //   todos.filter((todo) => todo.id !== id)
    // )
    dispatch({
      type: 'REMOVED',
      payload: id.toString()
    })
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={userInput} onChange={(e: ChangeEvent<HTMLInputElement>) => { setUserInput(e.target.value) }}></input>
      <button>Spara</button>
    </form>
    <section>
      <ul>
        {todos.map((todo) => (<><li key={todo.id} onClick={() => toggleTodo(todo.id)} className={todo.isDone ? 'done' : ''}>{todo.text}</li><button onClick={() => removeTodo(todo.id)}>X</button></>))}
      </ul>

    </section>
  </>;

}