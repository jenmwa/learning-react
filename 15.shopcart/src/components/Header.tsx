import { useContext } from "react"
import { ShopCartContext } from "../contexts/ShopCartContext"



export const Header = () => {
    const shopCart = useContext(ShopCartContext)
    console.log(shopCart)

    return <>
     <header className="header">
      <button className="material-symbols-outlined">local_mall</button>
      <div className="shopcart-total-amount">0</div>

      <div className='shopcart-div'> ShopCart-div
        {shopCart?.map((product) => (
            <div key={product.id}>{product.name}</div>
      ))}
      </div>
     
    </header>
    </>
}