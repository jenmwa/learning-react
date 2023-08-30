
import { useState } from 'react';
import './App.css'
import { ITheme, ThemeContext, themes } from './contexts/ThemeContext'
import { Button } from './components/Button';
import { TodoApp } from './components/TodoApp';

function App() {

  const [theme, setTheme] = useState<ITheme>(themes.light);

  const handleClick = () => {
setTheme(theme === themes.light ? themes.dark : themes.light)
  }
 

  return (
    <>
   <p>Hello</p>
   <ThemeContext.Provider value={theme}>
    {/* <ShowMessage></ShowMessage> */}
    <Button clickfunction={handleClick} children={<>Byt till {theme === themes.light ? 'dark' : 'light' }</>}></Button>
    {/* <button onClick={handleClick}>Ändra message</button> */}

    <TodoApp></TodoApp>
   </ThemeContext.Provider>
    </>
  )
}

export default App
