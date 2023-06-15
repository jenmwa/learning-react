import { Link } from "react-router-dom";
import '../style/navigation.css';


export const Navigation = () => {

  return <>
    <h3 className='rainbow-text'>the color API</h3>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/colors'>Colors</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </>

}