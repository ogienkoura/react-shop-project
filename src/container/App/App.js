import React, { useState } from 'react'
import { omit } from 'lodash'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        // 1: 2,
        // 2: 3,
        // 3: 1,
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

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                removeProductFromCart={removeProductFromCart}
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
            <Footer />
        </>
    )
}
