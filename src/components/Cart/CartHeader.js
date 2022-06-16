import React from 'react'
import './CartHeader.scss'
import {keys} from 'lodash'
import productsArray from 'utils/poductsArray'


const productsObject = productsArray.reduce((obj, product) => ({
    ...obj,
    [product.id]: product,
}), {} 
)

console.log(productsObject)
console.log(productsArray)

export const CartHeader = ({ productsInCart }) => {
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

