import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ProductListItem } from './ProductListItem'
import productsArray from 'utils/poductsArray'

export const ProductsList = ({addProductToCart}) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>

            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
