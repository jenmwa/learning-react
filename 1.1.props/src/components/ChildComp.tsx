import { Icecream } from "../App"

interface IIcecreamProps {
  icecream: Icecream
}

export const ChildComp = ({ icecream }: IIcecreamProps) => {

  return (
    <>
      <div>
        <h3>props Objekt:</h3>
        <p>flavor: {icecream.flavor}</p>
        <p>price: {icecream.price}</p>
        <p>Available: {icecream.available ? 'YES' : 'Sorry, we´re out for today'}</p>
      </div>
    </>
  )
}