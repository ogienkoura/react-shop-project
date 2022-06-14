import React, { useState } from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartData, setCartData] = useState({
        count: 0,
        price: 0,
    })
    
const addProductToCart = (count, price) => {
    setCartData((prevState) => ({
        count:prevState.count + count,
        price:prevState.price + (price * count),
    }))
}

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart}/>
            <Footer />
        </>
    )
}
