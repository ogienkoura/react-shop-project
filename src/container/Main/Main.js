import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = () => {
    return (
        <>
            <Container>
                <ProductsList />
            </Container>
        </>
    )
}
