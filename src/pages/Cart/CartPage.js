import React from 'react'
import productsArray, { getProductsObject } from 'utils/poductsArray'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'

export const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <>
            <h1>Cart Page</h1>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
