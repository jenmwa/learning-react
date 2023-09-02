import { Link } from "react-router-dom"

interface IShopCartOpenProps {
  handleIsShopCartOpen: () => void;
}

export const Navigation = ({handleIsShopCartOpen}: IShopCartOpenProps) => {

  return <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
        <button className="material-symbols-outlined" onClick={handleIsShopCartOpen}>local_mall</button>
      </ul>
    </nav>
  </>
}