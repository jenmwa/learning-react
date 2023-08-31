// import { useContext, useState } from "react"
import { useContext, useState } from 'react';
import { IProducts } from "../models/IProducts"
import products from "../products"
import { ShopCartContext } from '../contexts/ShopCartContext';
import { ActionType } from '../reducers/ShopCartReducer';
import { ShopCartDispatchContext } from '../contexts/ShopCartDispatch';


export const Products = () => {
    const [productsList, setProductsList] = useState<IProducts[]>(products)
    // const [shopcart, setShopCart] = useState<IProducts[]>([]);

    const dispatch = useContext(ShopCartDispatchContext)
    const shopcart = useContext(ShopCartContext)

    const addProductToCart = (id: number) => {
        console.log('click on', id)

        dispatch({
            type: ActionType.ADDED,
            payload: {
              id: id,
              products: productsList
            }
          });

        console.log(shopcart)
    }



const html = (
    <section>
        <p>list of products</p>
        {productsList.map((product) => (
            <div
                key={product.id}>
                {product.name}, {product.price}kr
                <button onClick={() => addProductToCart(product.id)}>Add</button>
            </div>
        ))}
    </section>
)

return <>
    {html}
</>

}
