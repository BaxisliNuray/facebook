import Button from '@mui/material/Button';
import { Link, TextField } from '@mui/material'
import { Container, display } from '@mui/system'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useFormik } from "formik"
import { Validation } from './validation';



function Facebook() {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm()
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            phonenum: '',
            password: '',
            month: '',
            year: '',
            day: '',
            female: false,
            male: true

        },
        onSubmit: handleSubmit,
        validationSchema: Validation,
    })



    return (
        <>
            <Link to="/">
            <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '30px', color: '#1877f2', fontFamily: 'sans-serif' }}>facebook</h1>
            </Link>
            <div style={{ margin: '0 auto', width: '425px', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <h2 style={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'sans-serif' }}>Create a new account</h2>
                <p style={{ color: 'gray', fontSize: '17px', textAlign: 'center', marginTop: '-10px', fontFamily: 'sans-serif' }}>It's quick and easy.</p>
                <hr />
                <Container>
                    <form onSubmit={formik.handleSubmit} style={{ marginTop: '15px', }}>
                        <div style={{ display: 'flex' }}>
                            <TextField
                                className={formik.errors.name && formik.touched.name ? "input-error" : ""}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{ marginRight: '5px' }}
                                type="text"
                                name="name"
                                label="First name"
                                id="outlined-size-small"
                                size="small" />

                            {formik.errors.name && formik.touched.name &&(
                            <p style={{ color: "red",position:'absolute',left:'27%' }}>{formik.errors.name}</p>)}


                            <TextField
                                className={formik.errors.lastname && formik.touched.lastname ? "input-error" : ""}

                                style={{ marginLeft: '5px' }}
                                type="text"
                                name="lastname"
                                value={formik.values.lastname}
                                label="Last name"
                                onChange={formik.handleChange}
                                id="outlined-size-small"
                                onBlur={formik.handleBlur}
                                size="small" />
                                {formik.errors.name && formik.touched.name &&(
                            <p style={{ color: "red",position:'absolute',right:'32%' }}>{formik.errors.lastname}</p>)}


                        </div>
                        <TextField
                            className={formik.errors.phonenum && formik.touched.phonenum ? "input-error" : ""}
                            style={{ marginTop: '10px', width: '100%' }}
                            name="phonenum"
                            value={formik.values.phonenum}
                            onChange={formik.handleChange}
                            type="number"
                            label="Mobile number or email"
                            id="outlined-size-small"
                            onBlur={formik.handleBlur}
                            size="small" />
                        {formik.errors.name && formik.touched.name &&(<p style={{ color: "red" }}>{formik.errors.phonenum}</p>)}

                        <TextField
                            className={formik.errors.password && formik.touched.password ? "input-error" : ""}
                            style={{ marginTop: '10px', width: '100%' }}
                            name="password"
                            value={formik.values.password}
                            type="password"
                            onChange={formik.handleChange}
                            label="New password"
                            id="outlined-size-small"
                            onBlur={formik.handleBlur}
                            size="small" />
                            {formik.errors.name && formik.touched.name &&(
                        <p style={{ color: "red" }}>{formik.errors.password}</p>)}

                        <div style={{ marginTop: '15px' }}>
                            <small>Birthday +</small>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Month</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Month "
                                        name="month" onChange={formik.handleChange}
                                        value={formik.values.month}
                                        onBlur={formik.handleBlur}

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
                                    <p style={{ color: "red" }}>{formik.errors.month}</p>


                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Day</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Day "
                                        name="day" onChange={formik.handleChange}
                                        value={formik.values.day}
                                        onBlur={formik.handleBlur}

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
                                    <p style={{ color: "red" }}>{formik.errors.day}</p>


                                </FormControl>

                                <FormControl sx={{ m: 1, minWidth: 114 }} size="small">
                                    <InputLabel id="demo-select-small-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        label="Year "
                                        name="year" onChange={formik.handleChange}
                                        value={formik.values.year}
                                        onBlur={formik.handleBlur}


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
                                    <p style={{ color: "red" }}>{formik.errors.year}</p>

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
                                    <FormControlLabel
                                        className={formik.errors.female && formik.touched.female ? "input-error" : ""}
                                        style={{ color: 'gray' }}
                                        name="female"
                                        value={formik.values.female}
                                        onChange={formik.handleChange}
                                        type="checkbox"
                                        control={<Radio />}
                                        onBlur={formik.handleBlur}
                                        label="Female" />
{formik.errors.name && formik.touched.name &&(
                                    <p style={{ color: "red" }}>{formik.errors.female}</p>)}
                                    <FormControlLabel
                                        className={formik.errors.male && formik.touched.male ? "input-error" : ""}
                                        style={{ color: 'gray' }}
                                        name="male"
                                        value={formik.values.male}
                                        type="checkbox"
                                        onChange={formik.handleChange}
                                        control={<Radio />}
                                        onBlur={formik.handleBlur}
                                        label="Male" />
                                        {formik.errors.name && formik.touched.name &&(
                                    <p style={{ color: "red" }}>{formik.errors.male}</p>)}


                                </RadioGroup>
                            </FormControl>
                        </div>
                        <p style={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '11px' }}>People who use our service may have uploaded your contact information to Facebook. <a style={{ textDecoration: 'none' }} href="#">Learn more.</a>
                        </p>
                        <p style={{ color: 'gray', fontFamily: 'sans-serif', fontSize: '11px' }}>By clicking Sign Up, you agree to our <a style={{ textDecoration: 'none' }} href="#">Terms, Privacy Policy</a> and <a style={{ textDecoration: 'none' }} href="#">Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>
                    </form>

                    <Button variant="text" style={{ fontWeight: "700", backgroundColor: '#00a400', color: 'white', borderRadius: '10px', border: 'none', width: '35%', margin: '30px auto', display: 'block' }}>Sign Up</Button>


                </Container>
            </div>
        </>

    )
}

export default Facebook