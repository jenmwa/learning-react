import { useReducer } from "react"
import { ShopCartContext } from "../contexts/ShopCartContext"
import { Header } from "./Header"
import { Products } from "./Products"
import { ShopCartReducer } from "../reducers/ShopCartReducer"
import { ShopCartDispatchContext } from "../contexts/ShopCartDispatch"
// import { ShopCart } from "../models/ShopCart"


export const ShopApp = () => {

  // const initialShopCart = new ShopCart([]);
  const [shopcart, dispatch] = useReducer(ShopCartReducer, []);

  return <>
    <ShopCartContext.Provider value={shopcart}>
      <ShopCartDispatchContext.Provider value={dispatch}>
        <Header></Header>
        <h1>the ShopCart</h1>
        <Products></Products>
      </ShopCartDispatchContext.Provider>
    </ShopCartContext.Provider>
  </>
}