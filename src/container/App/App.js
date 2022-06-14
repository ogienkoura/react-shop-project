import React, { useState } from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {

const [productsInCart, setProductsInCart] = useState({
    1: 5,
    2: 12,
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
            <Main addProductToCart={addProductToCart}/>
            <Footer />
        </>
    )
}
