import { useState } from "react";
import { IDonut } from "../Models/IDonut";
import '../style/ShopCart.scss'

interface ShopCartCompProps {
    cartFromParent: IDonut[];
  }

export const ShopCart = ({cartFromParent}: ShopCartCompProps) => {
    console.log(cartFromParent)
    const [donutInCart, setDonutinCart] = useState<IDonut[]>(cartFromParent)

    //kunna radera donuts
    //kunna ändra antal i donuts
    

    const html = (
        <>
         {donutInCart.map((donut) => {
            return <p className="p-text">donut: {donut.name}</p>
         })}
        </>
       
    )
    
    return (
        <>
        <p className="p-text">the shopCart</p>
        <div>{html}</div>
        </>
    )
}