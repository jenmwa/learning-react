import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext"
import { ShowTodo } from "./ShowTodo";


export const Todos = () => {
  const todos = useContext(TodosContext);
  

  // const html = (
  //   <>
  //     <section>
  //       {todos.map((todo) => (
  //         <div key={todo.id}>
  //           <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
  //           <button onClick={() => handleRemove(todo.id)}>X</button>
  //         </div>
  //       ))}
  //     </section>
  //   </>
  // )
  
  return (
  <div> 
  <p>Todos on the list: {todos.length}</p>
  {todos.map((todo) => (
   <ShowTodo key={todo.id} todo={todo}></ShowTodo>
  ))}
    {/* {html} */}
  </div>
)
}