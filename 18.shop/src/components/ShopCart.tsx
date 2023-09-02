import { useContext } from "react"
import { ShopCartContext } from "../contexts/ShopCartContext"
import { IProduct } from "../models/IProduct";


export const ShopCart = () => {
  const shopcart = useContext(ShopCartContext);
  console.log(shopcart);

  const totalProductprice = (shopCartProduct: IProduct) => {
    return shopCartProduct.quantity * shopCartProduct.price;
  }

  const renderCart = () => {
    if (shopcart.products.length === 0) {
      return (<p>Nothing in ShopCart yet!</p>)
    } else {
      return <>{html}
        <div>
          <p>totalquantity is: {shopcart.totalAmount}pcs</p>
          <p>totalprice is: {shopcart.totalPrice} kr</p>
          <button>BUY THIS</button>
        </div></>
    }
  }

  const html = (shopcart.products.map((shopcartproduct) => (

    <div
      key={shopcartproduct.id}>
      {shopcartproduct.name}, {shopcartproduct.quantity}pcs, {shopcartproduct.price}kr/each, tot: {totalProductprice(shopcartproduct)}kr
      <button className="material-symbols-outlined">
        delete_forever</button>
    </div>))
  )

  return <>
    <section className='shopcart-div'>
      shopCartDiv
      {renderCart()}
    </section>
  </>
}

