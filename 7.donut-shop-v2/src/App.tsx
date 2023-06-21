
import './style/App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import { ProductsComp } from './components/ProductsComp';
import { useState } from 'react';
import { IDonut } from './Models/IDonut';
import { HeroComp } from './components/HeroComp';
import { BuyComp } from './components/BuyComp';

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
      <BuyComp></BuyComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default App
