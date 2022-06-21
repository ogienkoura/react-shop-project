import React from "react";
import {keys} from 'lodash'
import productsArray, { getProductsObject } from 'utils/poductsArray'




export const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray)
}) => {
    return <>
    <h1>Cart Page</h1>
    <div>
            {keys(productsInCart).map((productId)=> (
                <div key={productId}>
                    {productsObject[productId].name}: {productsInCart[productId]}: {productsObject[productId].price}
                    
                </div>
            ))
            }
            </div>
            
            <div>Total: {
                keys(productsInCart).reduce((total, productId) => total + productsInCart[productId] * productsArray[productId - 1].price, 0)
                } $</div>
    </>
    
} 