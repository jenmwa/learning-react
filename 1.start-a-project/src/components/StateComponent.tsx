import { useState } from "react"


export const StateComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter +1)
    }

    const html = (
        <button onClick={handleClick}>{counter}</button>
    )

return <>
state component<br></br>
{html}
</>
}