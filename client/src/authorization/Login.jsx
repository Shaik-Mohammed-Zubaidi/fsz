import React, { useState, useEffect } from 'react';
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

import {useStyles,isValid} from './utils';
import axios from 'axios';

function Login(props) {
    const classes = useStyles();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [errorMessage,setErrorMessage]= useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        if(!isValid(email,password,setErrorMessage)){
            return;
        }
        setErrorMessage("");
        axios.post('/fsz/api/users/login',{
            email,
            password,
        })
            .then(response=>{
                setErrorMessage("");
                if (response.status === 200) {
                    window.sessionStorage.setItem('login', JSON.stringify(response.data));
                    props.history.push('/home');
                }
                console.log(response.data);
            })
            .catch(({response})=> {
                setErrorMessage(response.data.message)
            });
    }

    useEffect(()=>{
        if(window.sessionStorage.getItem("login")){
            props.history.push('/home');
            return;
        }
    },[props.history]);

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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
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

export default Login;