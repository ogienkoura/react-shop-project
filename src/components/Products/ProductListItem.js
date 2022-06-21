import React, { useState } from 'react'
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import PropTypes from 'prop-types'
import noImage from 'assets/no-image.jpg'

export const ProductListItem = ({
<<<<<<< HEAD
=======
    id,
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
    name,
    description,
    type,
    capacity,
    price,
    image,
<<<<<<< HEAD
=======
    addProductToCart,
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
}) => {
    const [count, setCount] = useState(1)

    const onIncrementClick = () => setCount(count + 1)
    const onDecrementCLick = () => setCount(count - 1)

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h2>{name}</h2>
                <p className="product-description">{description}</p>

                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} Gb
                </div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        size="small"
                        onClick={onDecrementCLick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        disabled={count >= 10}
                        variant="contained"
                        size="small"
                        onClick={onIncrementClick}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="add-to-cart-block">
<<<<<<< HEAD
                <Button variant="contained">Add to cart</Button>
=======
                <Button variant="contained" onClick={() => addProductToCart(id,count)}>Add to cart</Button>
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
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
