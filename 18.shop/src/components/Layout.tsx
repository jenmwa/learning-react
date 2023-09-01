import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { ShopCart } from "./ShopCart"



export const Layout = () => {

    return <>
    <header>
        <Navigation></Navigation>
        <ShopCart></ShopCart>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
}