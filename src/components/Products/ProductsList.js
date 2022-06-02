import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ProductListItem } from './ProductListItem'

export const ProductsList = () => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        type="phone"
                        capacity="128"
                        price="1000"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 12"
                        description="This is iPhone 12"
                        type="phone"
                        capacity="32"
                        price="400"
                    />
                </Grid>
            </Grid>
        </>
    )
}
