
import donutLogo from '/donut.svg'
import '../style/HeaderComp.scss'
import { NavComp } from './NavComp'

export function App() {

  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="header-left">
            <div className="logo-wrapper">
              <a href="#" target="#">
                <img src={donutLogo} className="logo donut" alt="Donut logo" />
              </a>
            </div>
            <h1 className="header-text">The Donut Shop <span>2.0</span></h1>
          </div>
          <div className="header-right">
            <button className="material-symbols-outlined shop-cart">
              shopping_bag
            </button>
          </div>
        </div>

        <NavComp></NavComp>
      </header>
    </>
  )
}

export default App
