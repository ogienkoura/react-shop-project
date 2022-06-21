import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import { Menu } from 'components/Menu/Menu'
import { CartHeader } from 'components/Cart/CartHeader'

<<<<<<< HEAD
export const Header = ({ cartData }) => {
=======
export const Header = ({ productsInCart }) => {
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Fake shop
                        </Typography>
                        <Menu />
<<<<<<< HEAD
                        <CartHeader cartData={cartData} />
=======
                        <CartHeader productsInCart={productsInCart} />
>>>>>>> 5481f25d2bd44b814d6332740faa59b8739c17c9
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
