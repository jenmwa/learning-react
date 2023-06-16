import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'

import './style/App.css'
import { MainComp } from './components/MainComp'
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
      <MainComp toShopCart={callbackForArray}></MainComp>
      <BuyComp></BuyComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default App
