import { keys } from 'lodash'
import React from 'react'
import productsArray, { getProductsObject } from 'utils/poductsArray'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name}:{' '}
                    {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}
