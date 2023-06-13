
import donutLogo from '/donut.svg'
import '../style/HeaderComp.scss'
import { NavComp } from './NavComp'
import { IDonut } from '../Models/IDonut';
import { HeroComp } from './HeroComp';

interface HeaderCompProps {
  cartFromParent: IDonut[];
}

const HeaderComp = ({ cartFromParent }: HeaderCompProps) => {
  console.log(cartFromParent)

  return (
    <>
      <header className="header">
        <div className="logo-container">
            <img src={donutLogo} className="donut" alt="Donut logo" />
        </div>
        <h1 className="header-text">The Donut Shop <span>2.0</span></h1>
      
       

        {/* <div className="header-right">
            <button className="material-symbols-outlined shop-cart">
              shopping_bag
            </button>
          </div> */}
        {/* </div> */}
        {/* <div className="header-right"> */}
        <NavComp cartFromParent={cartFromParent}></NavComp>
        {/* </div> */}
      </header>
    </>
  )
}

export default HeaderComp;
