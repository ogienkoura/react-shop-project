import { Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import { arrReviews } from './arrReviews'
import './Reviews.scss'

export const Reviews = () => {
    const [reviews, setReviews] = useState(arrReviews)

    return (
        <>
            <h2>Reviews</h2>
            {reviews.map(({ name, text }, i) => (
                <Card className="reviews-block-item" key={i}>
                    <div>Name: {name}</div>
                    <div>Message: {text}</div>
                </Card>
            ))}
            <h3>Please leave review about this product</h3>

            <form>
                <div>
                    <TextField size="small" label="Name" margin="normal" />
                </div>
                <div>
                    <TextField size="small" label="Text" margin="normal" />
                </div>
            </form>
        </>
    )
}
