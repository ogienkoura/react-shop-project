import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'

export const Main = ({addProductToCart}) => {
    return (
        <>
            <Container>

                <Routes>
                    <Route path="/" element={<ProductsList addProductToCart={addProductToCart}/>} />
                </Routes>
                
            </Container>
        </>
    )
}
