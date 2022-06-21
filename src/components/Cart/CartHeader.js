import React from 'react'
import './CartHeader.scss'
import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="CartHeader">
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
