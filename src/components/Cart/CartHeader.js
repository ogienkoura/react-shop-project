import React from 'react'
import './CartHeader.scss'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="CartHeader">
            {Object.keys(productsInCart).map((productId)=> (
                <div>{productId}: {productsInCart[productId]}</div>
            ))
            }
        </div>
    )
}
