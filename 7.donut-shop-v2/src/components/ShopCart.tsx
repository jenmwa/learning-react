import { useState } from "react";
import { IDonut } from "../Models/IDonut";
import '../style/ShopCart.scss'

interface ShopCartCompProps {
  cartFromParent: IDonut[];
  className?: string;
}

export const ShopCart = ({ cartFromParent }: ShopCartCompProps) => {
  console.log(cartFromParent)
  const [donutInCart, setDonutinCart] = useState<IDonut[]>(cartFromParent)

  //kunna radera donuts
  //kunna ändra antal i donuts
  //IShopCart som interface? implementera så vi har totalamount & total pieces?


  const html = (
    <>
      {donutInCart.map((donut) => {
        return <p className="p-text">donut: {donut.name} Amount: {donut.amount}pieces, price:</p>
      })}
    </>

  )

  return (
    <>
      <section className="theShopCart">
        <p className="p-text">the shopCart</p>
        <div>{html}</div>
      </section>
    </>
  )
}