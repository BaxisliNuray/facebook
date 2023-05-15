import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: ' transparent' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-evenly' }}>                 
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                        <Typography
                            variant="h6"
                            component="a"
                            href="/facebook"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',

                            }}
                        >facebook</Typography>
                    </div>
                    <div style={{display:'flex'}}>
                    <Typography>
                        <Link style={{ color: 'blue', textDecoration: 'none' }} to='/'> Sign in</Link>
                    </Typography>
                    </div>


                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar