import { useState } from 'react';
import { IDonut } from '../Models/IDonut';
import '../style/NavComp.scss'
import { ShopCart } from './ShopCart';

interface NavCompProps {
  cartFromParent: IDonut[];
}

export const NavComp = ({cartFromParent}: NavCompProps) => {
  console.log(cartFromParent)

  const [isShopCartOpen, setIsShopCartOpen] = useState(false);

  const openCloseShopCart = () => {
    console.log('click to open/close shopCart')
    setIsShopCartOpen(!isShopCartOpen)
    
  }

  return (
    <>
      <nav>
        <div>
          this is the navbar.
        </div>
        <div className="header-right">
          <button onClick={openCloseShopCart} className="material-symbols-outlined shop-cart">
            shopping_bag
          </button>
          {isShopCartOpen && <ShopCart cartFromParent={cartFromParent} />}
        </div>
      </nav>
    </>
  )
}