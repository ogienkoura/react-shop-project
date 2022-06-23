import { Button, Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import { arrReviews } from './arrReviews'
import './Reviews.scss'

export const Reviews = () => {
    const [reviews, setReviews] = useState(arrReviews)
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    })

    const handleName = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    const handleText = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))

    const reviewSend = (e) => {
        e.preventDefault()
        setNewReview({
            name: '',
            text: '',
        })
        setReviews((value) => {
            return [...value, newReview]
        })
    }

    return (
        <div className="reviews-block">
            <h2>Reviews</h2>
            {reviews.map(({ name, text }, i) => (
                <Card className="reviews-block-item" key={i}>
                    <div>Name: {name}</div>
                    <div>Message: {text}</div>
                </Card>
            ))}
            <h3>Please leave review about this product</h3>

            <form onSubmit={reviewSend}>
                <div>
                    <TextField
                        size="small"
                        label="Name"
                        margin="normal"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextField
                        size="small"
                        label="Text"
                        margin="normal"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" onClick={reviewSend}>
                    Leave comment
                </Button>
            </form>
        </div>
    )
}
