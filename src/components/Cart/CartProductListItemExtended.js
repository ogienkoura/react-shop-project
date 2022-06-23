import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { Quantity } from 'components/Quantity/Quantity'

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
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

                    <Quantity
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
                    />

                    <br />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
