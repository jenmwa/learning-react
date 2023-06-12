import { useState } from "react";
import { Wishcream } from "../App";


interface IWishFlavorsProps {
    wishFlavors: Wishcream[];
}

export const ShowInput = ({wishFlavors}: IWishFlavorsProps) => {
    const [count, setCount] = useState<{[id: number]: number }>({});

    const counterFunction = (id: number) => {
        console.log('click on:', id)
        setCount((prevCount) => ({
            ...prevCount,
            [id]: (prevCount[id] || 0) + 1,
        }))
    }

    const html = wishFlavors.map((flavor) => (
        <>
   
        <li key={flavor.id}>{flavor.flavor}</li>
        <button onClick={() => counterFunction(flavor.id)}>{count[flavor.id] || 0}</button>

        </>
    ));

    return (
        <>
        <div>{html}</div>
        </>
    )
}