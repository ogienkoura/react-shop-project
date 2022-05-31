import React from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItem.scss'

export const ProductListItem = () => {
    return (
        <Card>
            <CardContent>
                <h4>iPhone XS</h4>
                <p>This is iPhone XS</p>
                <div>Type: phone</div>
                <div>Capacity: 64Gb</div>
                <div>500 $</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
