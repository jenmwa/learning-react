import reactLogo from '../assets/react.svg'
import '../style/FooterComp.scss'

export function App() {

  return (
    <>
      <footer>
        <div className="logo-wrapper">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <p>created with React</p>
      </footer>

    </>
  )
}

export default App
