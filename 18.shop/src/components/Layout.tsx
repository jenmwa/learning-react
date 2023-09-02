import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { ShopCart } from "./ShopCart"
import { useState } from "react"




export const Layout = () => {
    const [isShopCartOpen, setIsShopCartOpen] = useState(false)

    const handleIsShopCartOpen = () => {
        console.log ('click click', isShopCartOpen)
        setIsShopCartOpen(!isShopCartOpen)
    }
    // const dispatch = useContext(OpenShopCartDispatchContext)

    // const handleIsShopCartOpen = () => {
    //     dispatch({
    //         type: ActionType.TOGGLE_SHOPCART,
    //         payload:?,
    //       })  
    // }

    return <>
    <header>
        <Navigation handleIsShopCartOpen={handleIsShopCartOpen}></Navigation>
        {isShopCartOpen &&
            <ShopCart></ShopCart>
        }
            
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
}