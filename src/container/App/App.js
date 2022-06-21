import React, { useState } from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
<<<<<<< HEAD
    const [cartData, setCartData] = useState({
        count: 10,
        price: 100,
    })
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
=======

const [productsInCart, setProductsInCart] = useState({
    1: 2,
    2: 3,
})
    
const addProductToCart = (productId, count) => {
    setProductsInCart((prevState) => ({
        ...prevState,
        [productId]: (prevState[productId] || 0) + count,
    }))
}

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart}
            productsInCart={productsInCart}/>
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
            <Footer />
        </>
    )
}
