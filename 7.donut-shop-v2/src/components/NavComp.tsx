import '../style/NavComp.scss'

export const NavComp = () => {

  return (
    <>
      <nav>
        <div>
          this is the navbar.
        </div>
        <div className="header-right">
          <button className="material-symbols-outlined shop-cart">
            shopping_bag
          </button>
        </div>
      </nav>
    </>
  )
}