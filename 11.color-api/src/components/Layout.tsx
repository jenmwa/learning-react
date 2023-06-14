import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"




export const Layout = () => {

  return <>
    <header>
      <Navigation></Navigation>
    </header>
    <main>
      <Outlet></Outlet>
    </main>
    <Footer></Footer>

  </>
}