import React from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
