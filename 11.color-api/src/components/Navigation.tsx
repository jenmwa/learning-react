import { Link } from "react-router-dom";
import './style/navigation.css';


export const Navigation = () => {

  return <>
    the color API
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/colors'>Colors</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </>

}