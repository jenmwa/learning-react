import { IDonut } from "../Models/IDonut"

interface TotalCompProps {
    cartFromParent: IDonut[],
}

export const TotalComp = ({cartFromParent}: TotalCompProps) => {
    console.log(cartFromParent)

    return (
        <>
        <p>{'totalantal'}</p>
        <p>{'totalsumma'}</p>
        <p>{'discount-field'}</p>
        </>
    )
}