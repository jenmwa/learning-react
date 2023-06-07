import { Todo } from "../Models/Todo";
import '../style/todos.scss';

interface TodosProps {
  todos: Todo[];
  onTodoChecked: (id: number) => void;
  onTodoRemoved: (id: number) => void;
}

export const Todos = ({ todos, onTodoChecked, onTodoRemoved }: TodosProps) => {
  const handleChecked = (id: number) => {
    console.log('todo:', id, ' is checked/unchecked');
    onTodoChecked(id);
  }

  const removeTodo = (id: number) => {
    console.log('remove todo:', id);
    onTodoRemoved(id);
  }

  const html = todos.map((todo) => {
    const todoDivClass = `todo-div ${todo.isDone ? 'done' : ''}`;
    
    return (
      <div className={todoDivClass} key={todo.id}>
        <div className="wrapper1">
          <input
            type="checkbox"
            defaultChecked={false}
            checked={todo.isDone}
            onChange={() => handleChecked(todo.id)}
          />
          <h4>{todo.text}</h4>
        </div>
        <div className="wrapper2">
          <p>{todo.deadline}</p>
          <button
            className="remove material-symbols-outlined"
            onClick={() => removeTodo(todo.id)}
          >
            delete_forever
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className="todo">{html}</div>
  )
}