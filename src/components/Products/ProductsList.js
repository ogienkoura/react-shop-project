import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ProductListItem } from './ProductListItem'
import productsArray from 'utils/poductsArray'

<<<<<<< HEAD
export const ProductsList = () => {
=======
export const ProductsList = ({addProductToCart}) => {
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
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
<<<<<<< HEAD
=======
                                id={id}
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
<<<<<<< HEAD
=======
                                addProductToCart={addProductToCart}
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
