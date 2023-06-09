import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'

import './style/App.css'
import { MainComp } from './components/MainComp'
import { useState } from 'react';
import { IDonut } from './Models/IDonut';

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
      <MainComp toShopCart={callbackForArray}></MainComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default App
