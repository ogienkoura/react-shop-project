import { keys } from 'lodash'
import React from 'react'
import productsArray, { getProductsObject } from 'utils/poductsArray'
import { CartProductListItem } from './CartProductListItem'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
}) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}
