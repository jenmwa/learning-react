import { useEffect, useState } from "react";
import { IDonut } from "../Models/IDonut";
import '../style/ShopCart.scss'

interface ShopCartCompProps {
  cartFromParent: IDonut[];
  className?: string;
}

export const ShopCart = ({ cartFromParent }: ShopCartCompProps) => {
  console.log(cartFromParent)
  const [donutInCart, setDonutinCart] = useState<IDonut[]>([]);

  useEffect(() => {
    setDonutinCart(cartFromParent);
  }, [cartFromParent]);


  //IShopCart som interface? implementera så vi har totalamount & total pieces?
  //Visa total-pieces
  //Visa TotalAmount
  //insert discount-area
  //själva presentations-donut-diven i egen comp

  const removeDonut = (id: number) => {
    console.log('remove donut: id', id)
    console.log(donutInCart);
    setDonutinCart(donutInCart.filter((donut) => donut.id !== id))

  }

  const handleBuy = () => {
    console.log('buy and show buyComp')

  }

  const resetBuy = () => {
    console.log('let´s empty the cart!')
  }

  const html = (
    <>
      {donutInCart.length === 0 ? (
        <p>No products in Cart</p>
      ) : (
        donutInCart.map((donut) => {
          return (
            <div className="cart-donut-wrapper" key={donut.id}>
              <div className='cart-img-container'>
                <img className="cart-img" src={donut.img} />
              </div>

              <p
                className="cart-p-text">
                {donut.name} | {donut.amount}pcs | total: ${donut.totalAmount}</p>
              <button className="material-symbols-outlined cart-remove" onClick={() => removeDonut(donut.id)}>delete_forever</button>
            </div>
          );
        })
      )}
    </>

  )

  return (
    <>
      <section className="theShopCart">
        <p className="p-text">the shopCart</p>
        <div>{html}</div>
        {donutInCart.length !== 0 && (
          <>
            <span>Total cart:</span><br></br>
            <button className='confirm-buy-button' onClick={handleBuy}>BUY</button><br></br>
            <button className='cart-reset-button' onClick={resetBuy}>Reset</button>
          </>
        )}

      </section>
    </>
  )
}