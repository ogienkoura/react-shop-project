import React from 'react'
import './CartHeader.scss'

export const CartHeader = ({ cartData }) => {
    return (
        <div className="CartHeader">
            <div>{cartData.count}</div>
            <div>{cartData.price}$</div>
        </div>
    )
}
