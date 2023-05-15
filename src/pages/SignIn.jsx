import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { Container } from '@mui/system'
import Link from '@mui/material/Link';
import React from 'react'

function SignIn() {
    return (
        <>
            <Container>
                <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'space-between' }}>
                    <h2 style={{ marginTop: '10%' }}>facebook</h2>
                    <div style={{padding:'20px 10px', width: '450px', height: '370px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <TextField placeholder='Email or phone number' style={{width:'100%'}}></TextField>
                        <TextField placeholder='Password' style={{width:'100%',margin:'20px 0'}}></TextField>
                        <Button style={{width:'100%'}} size='large' variant="contained">Log in</Button>
                        <hr />
                        <Button style={{width:'50%',background:'green',marginTop:'20px'}} size='large' variant="contained">
                            <Link to='/facebook' style={{width:'100%',color:'white',textDecoration:'none',fontSize:'14px'}}  >Create new Acoount</Link>
                        </Button>

                        
                    </div>

                </div>
            </Container>
        </>
    )
}

export default SignIn