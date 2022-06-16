import React from 'react'
import './CartHeader.scss'
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

