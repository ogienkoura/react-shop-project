import { keys } from 'lodash'
import React from 'react'
import productsArray, { getProductsObject } from 'utils/poductsArray'

export const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            Total:
            {keys(productsInCart).reduce((total, productId) => {
                return (
                    total +
                    productsInCart[productId] * productsObject[productId].price
                )
            }, 0)}
            $
        </div>
    )
}
