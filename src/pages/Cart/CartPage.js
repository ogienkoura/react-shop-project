import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import { CartProductListItemExtended } from 'components/Cart/CartProductListItemExtended'
import { useSelector } from 'react-redux'

export const CartPage = ({ removeProductFromCart, changeProductQuantity }) => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)
    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
