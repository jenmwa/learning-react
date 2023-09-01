import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Wrapper } from './components/styled/Wrappers'
import { StyledH1 } from './components/styled/Headers'
import { Button, DangerButton } from './components/styled/Buttons'
import { AnimatedButton, TransitionButton } from './components/styled/Animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Wrapper>Hej hej</Wrapper>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <StyledH1>Vite + React</StyledH1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <DangerButton>Hej</DangerButton>
        <Button color='purple'>Hej hej</Button>
        <p><br></br>
          <AnimatedButton></AnimatedButton><br></br>
          <TransitionButton></TransitionButton>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
