import reactLogo from '../assets/react.svg';
import '../style/HeaderComponent.css';

export const HeaderComponent = () => {

  return (
    <>
    <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SR API</h1>
    </>
  )
}