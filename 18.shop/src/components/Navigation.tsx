import { Link } from "react-router-dom"


export const Navigation = () => {

  return <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
        <button className="material-symbols-outlined">local_mall</button>
      </ul>
    </nav>
  </>
}