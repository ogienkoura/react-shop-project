import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { CartTotal } from 'components/Cart/CartTotal'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CheckoutPage.scss'

export const CheckoutPage = () => {
    const productsInCart = useSelector(({ productsInCart }) => productsInCart)

    const [order, setOrder] = useState({
        name: '',
        address: '',
        isOrderSend: false,
    })

    const orderName = (e) => {
        setOrder((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const orderAddress = (e) => {
        setOrder((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: order.name,
                    address: order.address,
                }
            )

            .then((res) => res.data)
            .then(({ name, address }) =>
                setOrder({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    const renderForm = () => {
        return (
            <form onSubmit={sendForm} className="form">
                <div className="form-field-name">
                    <TextField
                        id="outlined-basic"
                        label="Your name"
                        variant="outlined"
                        onChange={orderName}
                    />
                </div>
                <div className="form-field-address">
                    <TextField
                        id="outlined-basic"
                        label="Your address"
                        variant="outlined"
                        onChange={orderAddress}
                    />
                </div>
                <Button
                    variant="outlined"
                    onClick={sendForm}
                    size="medium"
                    sx={{
                        width: 300,
                    }}
                >
                    Send
                </Button>

                <CartTotal productsInCart={productsInCart} />
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div className="feedback">
                <h2>Dear {order.name}, thanks for your order!</h2>
                <h3>Delivery address: {order.address}</h3>
                <h2>
                    <CartTotal productsInCart={productsInCart} />
                </h2>
            </div>
        )
    }

    return (
        <>
            <h1>Checkout Page</h1>
            {order.isOrderSend !== true ? renderForm() : renderMessage()}
        </>
    )
}
