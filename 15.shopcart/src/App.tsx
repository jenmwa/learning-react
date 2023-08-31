// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ChangeEvent, useState } from 'react'
import './App.css'
import { IProducts } from './models/IProducts';
import products from './products';

function App() {
  //   const [count, setCount] = useState(0)
  const [productsList, setProductsList] = useState<IProducts[]>(products) //loopa produkter
  const [shopCart, setShopCart] = useState<IProducts[]>([]); //set shopCart
  const [userAmount, setUserAmount] = useState<{ [productId: number]: number }>({}); //vad som ska skickas till varukorg

  const addProductToCart = (id: number) => {
    console.log('add to cart:', userAmount,  id)
    setUserAmount((amount) => ({
      ...amount, [id]: 0,
    }))
  }

  const userChoosenAmount = (id: number, newAmount: number) => {
    console.log('user have choosen', id + newAmount );
    setUserAmount((amount) => ({
      ...amount, [id]: newAmount,
    }))
  //nolla input
  }

  const html = (
    <div>
      {productsList.map((product) => (
          <div 
            key={product.id}>
              {product.name}, {product.price}kr
              <input 
                type='number' 
                value={userAmount[product.id] || 0}
                onChange = {(e: ChangeEvent<HTMLInputElement>) => 
                  userChoosenAmount(product.id, Number(e.target.value))}/>
          <button onClick={() => addProductToCart(product.id)}>Add</button>
          </div>
      ))}
    </div>
              
  )



  return <>
    {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

    <header className="header">
      <button className="material-symbols-outlined">local_mall</button>
      <div className="shopcart-total-amount">0</div>

      <div>ShopCart-div</div>
    </header>
    <h1>the ShopCart</h1>

    <p>list of products</p>
    <section>
      {html}
    </section>
    {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  </>

}

export default App
