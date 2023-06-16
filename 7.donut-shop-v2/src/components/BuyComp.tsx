import { Buyer } from "../Models/Buyer"
import { BuyerForm } from "./BuyerForm"


export const BuyComp = () => {

    const handleBuyerSave = (buyer: Buyer) => {
        console.log('recieved buyer: ', buyer)
    }
    return ( 
    <>
    <BuyerForm handleSave={handleBuyerSave}></BuyerForm>
    </>
    )
}