// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style/App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { QuoteComponent } from './components/QuoteComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <QuoteComponent></QuoteComponent>
    </>
  )
}

export default App
