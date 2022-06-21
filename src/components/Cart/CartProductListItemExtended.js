import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'

export const CartProductListItemExtended = ({ product, productCount }) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card className={'cart-product-extended'}>
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="media"
                    />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <p>Price for one item : {product.price} $</p>
                    <p>Count: {productCount}</p>
                    <Button variant="outlined">
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
