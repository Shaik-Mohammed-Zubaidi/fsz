import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  Grid,
  Container,
  CssBaseline,
  Typography,
  TextField,
  MenuItem,
} from "@material-ui/core";

import { useStyles, isValid } from "./utils";
import axios from "axios";

function SignUp(props) {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [profile, setProfile] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!isValid(email, pass, setErrorMessage)) {
      return;
    }
    let user = {
      admin: profile === "admin",
      firstName: fname,
      lastName: lname,
      email: email,
      password: pass,
    };
    setErrorMessage("");
    axios
      .post("/fsz/api/users/register", user)
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        props.history.push("/login");
      })
      .catch(({ response }) => {
        setErrorMessage(response.data.message);
      });
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("login")) {
      props.history.push("/home");
      return;
    }
  }, [props.history]);

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
                value={fname}
                onChange={(event) => setFname(event.target.value)}
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
                onChange={(event) => setLname(event.target.value)}
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
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={pass}
                onChange={(event) => setPass(event.target.value)}
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
            <Grid item xs={12}>
              <TextField
                value={profile}
                onChange={(event) => setProfile(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="select"
                label="profile"
                name="select"
                select
              >
                <MenuItem value="user">Singup as User</MenuItem>
                <MenuItem value="admin">Singup as Admin</MenuItem>
              </TextField>
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
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
