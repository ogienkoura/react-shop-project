import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/2996e78b-33ae-497f-b282-7ed1b154464a')
        .then((res) => res.data)
        .then((data) =>
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
        )
}
