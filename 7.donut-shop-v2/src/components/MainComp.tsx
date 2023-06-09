import '../style/MainComp.scss'
import { IDonut } from '../Models/IDonut'
import donuts from '../donuts'
import { ChangeEvent, useState } from 'react'
import { ICart } from '../Models/ICart'



export const MainComp = () => {
  const [donutAmount, setDonutAmount] = useState<IDonut[]>(donuts)
  const [shopCart, setShopCart] = useState<IDonut[]>([]);

  const increaseAmount = (d: IDonut) => {
    setDonutAmount(donuts.map((donut) => {
      if (donut.id === d.id) {
        return { ...donut, amount: donut.amount++ }
      } else {
        return donut;
      }
    }))
  }

  const decreaseAmount = (d: IDonut) => {
    setDonutAmount(donuts.map((donut) => {
      if (donut.id === d.id && donut.amount > 0) {
        return { ...donut, amount: donut.amount-- }
      } else {
        return donut;
      }
    }))
  }

  const calculateTotal = (d: IDonut) => {
    const totalAmount = d.price * d.amount;
    return totalAmount;
  };

  const buyToShopCart = (d: IDonut) => {
    console.log('click on buy:', d.name);
    //kolla om id redan finns, plussa på existing!
    setShopCart(shopCart => [...shopCart ,d])
  }


  const html = (
    <>
      {donutAmount.map((donut: IDonut) => (

        <article className="donut-article" key={donut.id}>

          <div className="donut-upper">
            <div className="img-wrapper">
              <img src={donut.img} alt={donut.name}></img>
            </div>
            <div className="text-container">
              <h3 className="donut-heading">{donut.name}</h3>
              <p className="donut-description">"{donut.description}"</p>
            </div>
          </div>
          <div className="donut-downer">
            <div className="button-container">
              <span>Price: {donut.price} dollars/each</span><br></br>
              <span>Amount: {donut.amount}</span> donuts<br></br>
              <span>Total: {calculateTotal(donut)} dollars</span>
            </div>
            <div className="amount-container">
              <button className="decrease-btn" onClick={() => { decreaseAmount(donut) }}>-</button>
              {/* <input className="input-amount" type="number" value={donut.amount} onChange={(event) => handleAmountChange(event, donut)}/> */}
              <button className="increase-btn" onClick={() => { increaseAmount(donut) }}>+</button>
              <button className="buy-btn" onClick={() => {buyToShopCart(donut)}}>BUY</button>
            </div>
          </div>
        </article>
      ))}

    </>
  )

  console.log(shopCart)

  return <>
    <h1>Welcome to the <span>Donut Shop</span>!</h1>
    <div className="main-donut">{html}</div>

  </>
}