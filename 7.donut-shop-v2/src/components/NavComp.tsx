import { useState } from 'react';
import { IDonut } from '../Models/IDonut';
import '../style/NavComp.scss'
import { ShopCart } from './ShopCart';

interface NavCompProps {
  cartFromParent: IDonut[];
}

export const NavComp = ({ cartFromParent }: NavCompProps) => {
  console.log(cartFromParent);

  const [isShopCartOpen, setIsShopCartOpen] = useState(false);

  const openCloseShopCart = () => {
    console.log('click to open/close shopCart')
    setIsShopCartOpen(!isShopCartOpen)

  }

  return (
    <>
      <nav>
        <ul>
          {/* <li>Our Donuts</li>
          <li>Contact</li> */}
        </ul>
        <div className="header-right">
          <button onClick={openCloseShopCart} className="material-symbols-outlined shop-cart">
            {isShopCartOpen ? 'close' : 'shopping_bag'}
          </button>
        </div>

      </nav>
      {isShopCartOpen && 
      <ShopCart className="theShopCart" cartFromParent={cartFromParent} />}
    </>
  )
}