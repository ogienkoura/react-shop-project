import React from 'react'
import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject } from 'utils/poductsArray'

export const ProductsPageItem = ({
    productsObject = getProductsObject(productsArray),
}) => {
    let { id } = useParams()
    console.log(id)
    return (
        <>
            <div>Hello {productsObject[id].name}</div>
        </>
    )
}
