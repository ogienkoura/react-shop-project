import React from 'react'
import './CartHeader.scss'
<<<<<<< HEAD

export const CartHeader = ({ cartData }) => {
    return (
        <div className="CartHeader">
            <div>{cartData.count}</div>
            <div>{cartData.price}$</div>
        </div>
    )
}
=======
import {keys} from 'lodash'
import productsArray, { getProductsObject } from 'utils/poductsArray'






export const CartHeader = ({ productsInCart, productsObject = getProductsObject(productsArray) }) => {
    return (
        <div className="CartHeader">
            <div>
            {keys(productsInCart).map((productId)=> (
                <div key={productId}>
                    {productsObject[productId].name}: {productsInCart[productId]}
                    
                </div>
            ))
            }
            </div>
            
            <div>Total: {
                keys(productsInCart).reduce((total, productId) => total + productsInCart[productId] * productsArray[productId - 1].price, 0)
                } $</div>
        </div>
    )
}

>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
