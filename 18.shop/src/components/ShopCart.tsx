import { useContext } from "react"
import { ShopCartContext } from "../contexts/ShopCartContext"


export const ShopCart = () => {
  const shopcart = useContext(ShopCartContext);
  console.log(shopcart);

  const html = (shopcart.products.map((shopcartproduct) => 
  <div
  key={shopcartproduct.id}>
  {shopcartproduct.name}, {shopcartproduct.quantity} {shopcartproduct.price}kr
  <button>remove</button>
</div>))

  return <>
    <section className='shopcart-div'>
      shopCartDiv
      {html}
      <div>
        <p>totalquantity is: {shopcart.totalAmount}</p>
        <p>totalprice is: {shopcart.totalPrice} kr</p>
      </div>
    </section>
  </>
}