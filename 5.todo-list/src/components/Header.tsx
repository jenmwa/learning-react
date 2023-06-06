import reactLogo from '../assets/react.svg'
import '../App.css'

export const Header = () => {

  return <>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h1>Let's React and DO!</h1>
  </>
}