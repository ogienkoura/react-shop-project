import { keys } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { getProductsObject } from 'utils/poductsArray'
import { CartProductListItem } from './CartProductListItem'

export const CartProductList = ({
    productsInCart,
    CartItem = CartProductListItem,
}) => {
    const productsArray = useSelector((state) => state.products)

    if (productsArray.length === 0) {
        return null
    } else {
        const productsObject = getProductsObject(productsArray)
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                    />
                ))}
            </>
        )
    }
}
