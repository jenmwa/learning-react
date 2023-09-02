
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router'
import { useEffect, useReducer } from 'react'
import donuts from './products'
import { ActionType, ProductsReducer } from './reducers/ProductsReducer'
import { ProductsContext } from './contexts/ProductsContext'
import { ProductsDispatchContext } from './contexts/ProductsDispatchContext'
import { ShopCartReducer } from './reducers/ShopCartReducer'
import { ShopCartContext } from './contexts/ShopCartContext'
import { ShopCartDispatchContext } from './contexts/ShopCartDispatchContext'
import { IShopcart } from './models/IShopcart'
import { OpenShopCartContext } from './contexts/OpenShopCartContext'
import { OpenShopCartDispatchContext } from './contexts/OpenShopCartDispatchContext'
import { OpenShopCartReducer } from './reducers/OpenShopCartReducer'

function App() {
  const initialShopCart: IShopcart = {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  };

  const [products, productsDispatch] = useReducer(ProductsReducer, []);
  const [shopcart, shopCartDispatch] = useReducer(ShopCartReducer, initialShopCart);
  const [isShopCartOpen, isShopCartOpenDispatch] = useReducer(OpenShopCartReducer, false);

  useEffect(() => {
    productsDispatch({
      type: ActionType.GOTPRODUCTS,
      payload: JSON.stringify(donuts)
    });
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>
        <ProductsDispatchContext.Provider value={productsDispatch}>
          <ShopCartContext.Provider value={shopcart}>
            <ShopCartDispatchContext.Provider value={shopCartDispatch}>
              <OpenShopCartContext.Provider value={isShopCartOpen}>
                <OpenShopCartDispatchContext.Provider value={isShopCartOpenDispatch}>
                  <RouterProvider router={router}></RouterProvider>
                </OpenShopCartDispatchContext.Provider>
              </OpenShopCartContext.Provider>
            </ShopCartDispatchContext.Provider>
          </ShopCartContext.Provider>
        </ProductsDispatchContext.Provider>
      </ProductsContext.Provider>
    </>
  )
}

export default App
