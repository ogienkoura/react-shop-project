import React from 'react'
import './CartHeader.scss'
import productsArray, { getProductsObject } from 'utils/poductsArray'
import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div className="CartHeader">
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
