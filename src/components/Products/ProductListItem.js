import React from 'react'
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

export class ProductListItem extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         productCount: 1,
    //     }
    // }

    state = {
        productCount: 1,
    }
    render() {
        const { name, description, type, capacity, price, image } = this.props
        return (
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt={name} />
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
                        <Button variant="outlined" size="small">
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.productCount}
                        />
                        <Button variant="outlined" size="small">
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// export const ProductListItem = ({
//     name,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }) => {}

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
