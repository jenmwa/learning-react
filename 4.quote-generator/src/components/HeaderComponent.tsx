import reactLogo from '../assets/react.svg'

export const HeaderComponent = () => {
    return <>
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Quote Generator</h1>
    </>
}