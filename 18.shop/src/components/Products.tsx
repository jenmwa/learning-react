import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { IProduct } from "../models/IProduct";
import { ShopCartDispatchContext } from "../contexts/ShopCartDispatchContext";
import { ActionType } from "../reducers/ShopCartReducer";




export const Products = () => {
  const dispatch = useContext(ShopCartDispatchContext);

  const products = useContext(ProductsContext);

  const addProductToCart = (product: IProduct) => {
    dispatch({
      type: ActionType.ADDED,
      payload: {product}
    })
  }

  const html = (
    <section className='products-div'>
         <p>There is {products.length} products available today:</p>
        {products.map((product) => (
            <div
                key={product.id}>
                {product.name}, {product.price}kr
                <button onClick={() => addProductToCart(product)}>Add</button>
            </div>
        ))}
    </section>
)

  return <>
    {html}
  </>
}