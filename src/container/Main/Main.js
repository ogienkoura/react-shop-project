import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from 'pages/Cart/CartPage'
import { ProductsPage } from 'pages/Produts/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import { PaymentPage } from 'pages/Payment/PaymentPage'
import { Reviews } from 'components/Reviews/Reviews'
import { ProductsPageItem } from 'pages/Produts/ProductsPageItem'
import { CheckoutPage } from 'pages/Checkout/CheckoutPage'

export const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductsList />
                                <Reviews />
                            </>
                        }
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route
                        path="/products/:id"
                        element={<ProductsPageItem />}
                    />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </>
    )
}
