import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'

import './style/App.css'
import { ProductsComp } from './components/ProductsComp'
import { useState } from 'react';
import { IDonut } from './Models/IDonut';
import { HeroComp } from './components/HeroComp';
import { BuyComp } from './components/BuyComp';

// interface AppProps {
//   cart: IDonut[];
// }

function App() {

  const [cart, setCart] = useState<IDonut[]>([]);

  const callbackForArray = (cart: IDonut[]) => {
    setCart(cart);
  };

  console.log(cart)
  return (
    <>
      <HeaderComp cartFromParent={cart} ></HeaderComp>
      <HeroComp></HeroComp>
      <ProductsComp toShopCart={callbackForArray}></ProductsComp>
      {cart.map((d: IDonut) => (
        <p>{d.name}{d.amount}</p>
      ))}
      <BuyComp></BuyComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default App
