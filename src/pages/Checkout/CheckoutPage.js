import axios from 'axios'
import { CartTotal } from 'components/Cart/CartTotal'
import React, { useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
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
            <Card className="card-contact-form">
                <h2 className="card-contact-form-title">
                    Please, fill the delivery form
                </h2>
                <Form className="contact-form" onSubmit={sendForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="card-contact-form-label">
                            Your name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            required
                            onChange={orderName}
                            className="card-contact-form-control"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="card-contact-form-label">
                            Your address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your address"
                            required
                            onChange={orderAddress}
                            className="card-contact-form-control"
                        />
                    </Form.Group>
                    <div className="submit-total">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <h4>
                            <CartTotal productsInCart={productsInCart} />
                        </h4>
                    </div>
                </Form>
            </Card>
        )
    }

    const renderMessage = () => {
        return (
            <Alert variant="success" className="feedback">
                <Alert.Heading>Hey, nice to see you!</Alert.Heading>
                <p>
                    Aww yeah,
                    <span>
                        <h4>{order.name}</h4>
                    </span>
                    thanks for your order! You successfully read this important
                    alert message. This example text is going to run a bit
                    longer so that you can see how spacing within an alert works
                    with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Delivery address:
                    <span>
                        <h4>{order.address}</h4>
                    </span>
                    . Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                </p>
                <h2 className="feedback-total">
                    <CartTotal productsInCart={productsInCart} />
                </h2>
            </Alert>
        )
    }

    return <>{order.isOrderSend !== true ? renderForm() : renderMessage()}</>
}
