import React from 'react'
import Button from '@mui/material/Button'
<<<<<<< HEAD
=======
import { NavLink } from 'react-router-dom'
import './Menu.scss'
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9

export const Menu = () => {
    return (
        <>
<<<<<<< HEAD
            <Button color="inherit">HOME</Button>
            <Button color="inherit">PRODUCTS</Button>
            <Button color="inherit">SHIPPING</Button>
            <Button color="inherit">PAYMENT</Button>
=======
            <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Cart
                </NavLink>
            </Button>
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
        </>
    )
}
