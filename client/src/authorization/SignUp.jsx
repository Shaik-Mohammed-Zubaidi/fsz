import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import { loginTheUser } from '../redux/authorization/actionCreator';
import {useStyles,isValid} from './utils';
const axios= require('axios');

function SignUp(props) {
    const {loginTheUser,isLoggedIn} = props;

    const classes = useStyles();
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [email,setEmail]= useState("");
    const [pass,setPass]= useState("");
    const [errorMessage,setErrorMessage]= useState("");

    const createAccount = async() =>{
        let user= {
            firstName: fname,
            lastName: lname,
            email: email,
            password: pass,
            data: {
                Books: 0,
                Games: 0,
                Courses: 0,
            }
        }
        const data= axios.post('api/fsz/user',user);
        data.then(res=> console.log("User Created", res)).catch(err=> console.log(err));
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
        if(!isValid(email,pass,setErrorMessage)){
            return;
        }
        createAccount().then(_=>{
            loginTheUser();
            props.history.push('/home');
        });
    }

    if(isLoggedIn){
        props.history.push('/home');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSignUp}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value= {fname}
                                onChange={(event)=>setFname(event.target.value)}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={lname}
                                onChange={(event)=>setLname(event.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={pass}
                                onChange={(event)=>setPass(event.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    {errorMessage}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.authorizationReducer
    }
}

export default connect(mapStateToProps,{
    loginTheUser,
})(SignUp);