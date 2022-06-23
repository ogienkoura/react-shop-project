import React, { useState } from 'react'
import { omit } from 'lodash'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 1,
        2: 4,
    })

    const addProductToCart = (productId, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: (prevState[productId] || 0) + count,
        }))
    }

    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => omit(prevState, productId))
    }

    const changeProductQuantity = (productId, quantity) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: quantity,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main
                removeProductFromCart={removeProductFromCart}
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                changeProductQuantity={changeProductQuantity}
            />
            <Footer />
        </>
    )
}
