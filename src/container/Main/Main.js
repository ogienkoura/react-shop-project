import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from 'pages/Cart/CartPage'
import { ProductsPage } from 'pages/Produts/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import { PaymentPage } from 'pages/Payment/PaymentPage'

export const Main = ({ addProductToCart, productsInCart }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductsList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="/cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
            </Container>
        </>
    )
}
