import { useContext } from "react"
import { ShopCartContext } from "../contexts/ShopCartContext"


export const ShopCart = () => {
  const shopcart = useContext(ShopCartContext);
  console.log(shopcart);

  return <>
    <section className='shopcart-div'>
      shopCartDiv
    </section>
  </>
}