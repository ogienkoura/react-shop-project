<<<<<<< HEAD
const products = [
=======
const productsArray = [
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
    {
        id: 1,
        name: 'iPhone 13 Pro',
        // description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: 128,
        price: 1000,
        image: 'images/phone-1.jpg',
    },
    {
        id: 2,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 64,
        price: 800,
        image: 'images/phone-2.jpg',
    },
    {
        id: 3,
        name: 'iPhone 11 Pro Max',
        description: 'This is iPhone 11 Pro Max',
        type: 'phone',
        capacity: 256,
        price: 700,
        image: 'images/phone-3.jpg',
    },
    {
        id: 4,
        name: 'Nokia 6151',
        description: 'This is Nokia 6151',
        type: 'phone',
        capacity: 32,
        price: 200,
        image: 'images/phone-4.jpg',
    },
    {
        id: 5,
        name: 'Siemens 123',
        description: 'This is Siemens 123',
        type: 'phone',
        capacity: 8,
        price: 150,
        image: 'images/phone-5.jpg',
    },
    {
        id: 6,
        name: 'Sony Xperia',
        description: 'This is Sony Xperia',
        type: 'phone',
        capacity: 64,
        price: 250,
        // image: 'images/phone-6.jpg',
    },
]

<<<<<<< HEAD
export default products
=======
export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
