import '../style/InputField.css'
import { FormEvent, useState } from 'react';
import { Todo } from '../Models/Todo';
import { Todos } from '../components/Todos'

export const InputField = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('click on button');
    if (inputValue.trim() !== '') {
      console.log('add todo', inputValue);
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        deadline: '230630',
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    } 
  };
  console.log(todos)

  const handleChecked = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleReset = () => {
    setInputValue('');
  }

  return <>
    <section className="input-section">
      <form onSubmit={handleInput}>
        <label>
          <span>What should we do today?</span>
          <input
            name="myInput"
            type="text"
            id="inputField"
            placeholder="Add your todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          >
          </input>
        </label>
        <button className="submitBtn" type="submit">ADD todo</button>
        <button type="reset" onClick={handleReset} >Reset</button>
      </form>
    </section>
    {todos.length > 0 ? ( 
    <Todos 
      todos={todos} 
      onTodoChecked={handleChecked}
      onTodoRemoved={removeTodo}
    /> ) : (<p>You have no todos to Do.</p>)}
  </>
}