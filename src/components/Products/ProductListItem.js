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
    render() {
        return (
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt={this.props.name} />
                    </div>
                    <h2>{this.props.name}</h2>
                    <p className="product-description">
                        {this.props.description}
                    </p>
                    <div className="product-features">
                        <span>Type:</span> {this.props.type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {this.props.capacity} Gb
                    </div>
                    <div className="product-price">{this.props.price} $</div>
                    <div className="product-quantity">
                        <Button variant="outlined" size="small">
                            -
                        </Button>
                        <TextField size="small" value="1" />
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
