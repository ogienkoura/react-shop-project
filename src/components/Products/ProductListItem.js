import React, { useState } from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItem.scss'
import PropTypes from 'prop-types'
import noImage from 'assets/no-image.jpg'
import { Quantity } from 'components/Quantity/Quantity'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useSelector, useDispatch } from 'react-redux'

export const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    const [count, setCount] = useState(1)

    const onIncrementClick = () => setCount(count + 1)
    const onDecrementClick = () => setCount(count - 1)

    const isLiked = useSelector(
        ({ productsLikeState }) => productsLikeState[id]
    )
    const dispatch = useDispatch()

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch({
                                  type: 'DISLIKE',
                                  id,
                              })
                            : dispatch({
                                  type: 'LIKE',
                                  id,
                              })
                    }
                >
                    {' '}
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}{' '}
                </Button>

                <Link to={`products/${id}`}>
                    <h2>{name}</h2>
                </Link>
                <p className="product-description">{description}</p>

                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} Gb
                </div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Quantity
                        count={count}
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                        minCount={1}
                    />
                </div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button
                    variant="contained"
                    onClick={() =>
                        dispatch({
                            type: 'ADD_PRODUCT_TO_CART',
                            id,
                            count,
                        })
                    }
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductListItem.defaultProps = {
    description: 'No desc',
    image: noImage,
}
