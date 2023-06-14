import { Link } from "react-router-dom"

export const Navigation = () => {
  return <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
    </nav>
  </>
}