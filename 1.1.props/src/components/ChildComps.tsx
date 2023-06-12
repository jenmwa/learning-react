import { IIcecream, Icecream } from "../App"

interface icecreamProps {
    icecreams: IIcecream[]
}

export const ChildComps = ({ icecreams }: icecreamProps) => {

    const html = (
        <>
            {icecreams.map((icecream) => {
                return <div key={icecream.id}>
                    <p>flavor: {icecream.flavor}</p>
                    <p>price: {icecream.price}</p>
                    <p>Available: {icecream.available ? 'YES' : 'Sorry, we´re out for today'}</p>
                </div>
            })}
        </>
    )

    return (
        <>
             <h3>props Lista:</h3>
            <div>{html}</div>

        </>
    )
}