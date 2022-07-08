import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { Quantity } from 'components/Quantity/Quantity'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const CartProductListItemExtended = ({ product, productCount }) => {
    const isLiked = useSelector(
        ({ productsLikeState }) => productsLikeState[product.id]
    )
    const dispatch = useDispatch()

    const removeProductFromCart = () =>
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            id: product.id,
        })

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
                                ? removeProductFromCart()
                                : dispatch({
                                      type: 'CHANGE_PRODUCT_QUANTITY',
                                      id: product.id,
                                      quantity: productCount - 1,
                                  })
                        }
                        onIncrementClick={() =>
                            dispatch({
                                type: 'CHANGE_PRODUCT_QUANTITY',
                                id: product.id,
                                quantity: productCount + 1,
                            })
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <br />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart()}
                    >
                        <DeleteIcon />
                    </Button>{' '}
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispatch({
                                      type: 'DISLIKE',
                                      id: product.id,
                                  })
                                : dispatch({
                                      type: 'LIKE',
                                      id: product.id,
                                  })
                        }
                    >
                        {' '}
                        {isLiked ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}{' '}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
