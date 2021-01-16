import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import {loginTheUser} from '../redux/authorization/actionCreator';
import {setInitialState} from '../redux/progress/actionCreator';
import {useStyles,isValid} from './utils';
const axios= require('axios');

function Login(props) {
    const {isLoggedIn,loginTheUser,setInitialState}= props;
    const classes = useStyles();
    const [email,setEmail]= useState("");
    const [pass,setPass]= useState("");
    const [errorMessage,setErrorMessage]= useState("");

    const verifyUser = () =>{
        const data= axios.get(`/api/fsz/user?email=${email}`);
        data
            .then(res=> {
                let receivedUser= res.data[0];
                if(receivedUser.password!==pass){
                    setErrorMessage("Incorrect Password");
                }
                else{
                    loginTheUser();
                    const {Games,Books,Courses} = receivedUser.data;
                    setInitialState({
                        Games,
                        Books,
                        Courses,
                    });
                    sessionStorage.setItem('email',receivedUser.email);
                    setErrorMessage("");
                    props.history.push('/home');
                }
            }).catch(err=> console.log(err));
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        if(!isValid(email,pass,setErrorMessage)){
            return;
        }
        verifyUser();
    }

    if(isLoggedIn){
        props.history.push('/home');
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleLogin} >
                        <TextField
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Typography component="div">
                            {errorMessage}
                        </Typography>                        
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/signup">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.authorizationReducer
    }
}

export default connect(mapStateToProps,{
    loginTheUser,
    setInitialState,
})(Login);