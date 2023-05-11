import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import { Container, display } from '@mui/system'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



function Facebook() {
    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '30px', color: '#1877f2', fontFamily: 'sans-serif' }}>facebook</h1>
            <div style={{ margin: '0 auto', width: '425px',height:'570px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <h2 style={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'sans-serif' }}>Create a new account</h2>
                <p style={{ color: 'gray', fontSize: '17px', textAlign: 'center', marginTop: '-10px', fontFamily: 'sans-serif' }}>It's quick and easy.</p>
                <hr />
                <Container>
                    <form style={{ marginTop: '15px' }}>
                        <div style={{ display: 'flex' }}>
                            <TextField style={{ marginRight: '5px' }} label="First name" id="outlined-size-small" size="small" />
                            <TextField style={{ marginLeft: '5px' }} label="Last name" id="outlined-size-small" size="small" />
                        </div>
                        <TextField style={{ marginTop: '10px', width: '100%' }} label="Mobile number or email" id="outlined-size-small" size="small" />
                        <TextField style={{ marginTop: '10px', width: '100%' }} label="New password" id="outlined-size-small" size="small" />
                        <div style={{ marginTop: '15px' }}>
                            <small>Birthday +</small>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Month</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Month "
                                    >
                                        <MenuItem value={1}>Jan</MenuItem>
                                        <MenuItem value={2}>february</MenuItem>
                                        <MenuItem value={3}>Martch</MenuItem>
                                        <MenuItem value={4}>April</MenuItem>
                                        <MenuItem value={5}>May</MenuItem>
                                        <MenuItem value={6}>June</MenuItem>
                                        <MenuItem value={7}>July</MenuItem>
                                        <MenuItem value={8}>Augast</MenuItem>
                                        <MenuItem value={9}>September</MenuItem>
                                        <MenuItem value={10}>October</MenuItem>
                                        <MenuItem value={11}>November</MenuItem>
                                        <MenuItem value={12}>December</MenuItem>

                                    </Select>

                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Day</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Day "
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>

                                    </Select>

                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Year "
                                    >
                                        <MenuItem value={1}>2024</MenuItem>
                                        <MenuItem value={2}>2023</MenuItem>
                                        <MenuItem value={3}>2022</MenuItem>
                                        <MenuItem value={4}>2021</MenuItem>
                                        <MenuItem value={5}>2020</MenuItem>
                                        <MenuItem value={6}>2019</MenuItem>
                                        <MenuItem value={7}>2018</MenuItem>
                                        <MenuItem value={8}>2017</MenuItem>
                                        <MenuItem value={9}>2016</MenuItem>
                                        <MenuItem value={10}>2015</MenuItem>
                                        <MenuItem value={11}>2014</MenuItem>
                                        <MenuItem value={12}>2013</MenuItem>

                                    </Select>

                                </FormControl>








                            </div>
                        </div>

                        <div style={{ marginTop: '15px' }}>
                            <FormControl>
                                <small>Gender+</small>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" style={{color:'gray'}} control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" style={{color:'gray'}} control={<Radio />} label="Male" />

                                </RadioGroup>
                            </FormControl>
                        </div>
                        <p style={{ color: 'gray', fontFamily: 'sans-serif',fontSize:'11px'  }}>People who use our service may have uploaded your contact information to Facebook. <a style={{textDecoration:'none'}} href="#">Learn more.</a>
                        </p>
                        <p style={{ color: 'gray', fontFamily: 'sans-serif',fontSize:'11px' }}>By clicking Sign Up, you agree to our <a style={{textDecoration:'none'}} href="#">Terms, Privacy Policy</a> and <a style={{textDecoration:'none'}} href="#">Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>
                    </form>

                    <Button variant="text" style={{ fontWeight: "700", backgroundColor: '#00a400', color: 'white', borderRadius: '10px', border: 'none', width: '35%' ,margin:'30px auto' ,display:'block'  }}>Sign Up</Button>

                    
                </Container>
            </div>
        </>

    )
}

export default Facebook