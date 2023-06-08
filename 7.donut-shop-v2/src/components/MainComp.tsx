import '../style/MainComp.scss'
import { IDonut } from '../Models/IDonut'
import donuts from '../donuts'
import { ChangeEvent, useState } from 'react'

export const MainComp = () => {
  const [donutAmount, setDonutAmount] = useState<IDonut[]>(donuts) 

  // const donutArray: IDonut[] = donuts;

//   const handleAmountChange = (e: ChangeEvent<HTMLInputElement>, d: IDonut) => {
//     console.log(e.target.value)
//     const newAmount = Number(e.target.value);
//   setDonutAmount((prevDonuts) =>
//     prevDonuts.map((donut) =>
//       donut.id === d.id ? { ...donut, amount: newAmount } : donut
//     )
//   );
// };

  const increaseAmount = (d: IDonut) => {
    setDonutAmount(donuts.map((donut) => {
      if(donut.id === d.id) {
        return {...donut, amount: donut.amount++ }
      } else {
        return donut;
      }
    }))
  }

  const decreaseAmount = (d: IDonut) => {
    setDonutAmount(donuts.map((donut) => {
      if(donut.id === d.id && donut.amount > 0) {
        return {...donut, amount: donut.amount-- }
      } else {
        return donut;
      }
    }))
  }



  const html = (
    <>
      {donuts.map((donut: IDonut) => (
        <article className="donut-article" key={donut.id}>
          <div className="img-wrapper">
            <img src={donut.img} alt={donut.name}></img>
          </div>
          <div className="text-container">
            <h3 >{donut.name}</h3>
            <p>{donut.description}</p>
            <span>Price: {donut.price} dollars/each</span><br></br>
            <span>Amount: {donut.amount}</span><br></br>
            <span>Total: {}</span>
          </div>
          <div className="amount-container">
            <button className="decrease-btn"onClick={() => {decreaseAmount(donut)}}>-</button>
            {/* <input className="input-amount" type="number" value={donut.amount} onChange={(event) => handleAmountChange(event, donut)}/> */}
            <button className="increase-btn" onClick={() => {increaseAmount(donut)}}>+</button>
            <button className="buy-btn">BUY</button>
          </div>
        </article>
      ))}

    </>
  )

  return <>
    <h1>Welcome to the <span>Donut Shop</span>!</h1>

    <div>{html}</div>

  </>
}