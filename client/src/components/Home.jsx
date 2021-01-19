import React, { useState, useEffect } from 'react';
import {Box} from "@material-ui/core";
import axios from 'axios';
import { connect } from 'react-redux';

import Categories from "./Categories";
import Feed from "./Feed";
import Progress from "./Progress";
import Header from './Header';
import Logout from '../authorization/Logout';

import {setInitialState} from '../redux/progress/actionCreator';

function Home(props) {
    const {setInitialState} = props;
    const categoriesList= ["Books","Games","Courses"];
    const [category,setCategory] = useState("Books");

    useEffect(() => {
        if (!window.sessionStorage.getItem('login')) { 
            props.history.push('/login');
            return;
        }
        const login = JSON.parse(window.sessionStorage.getItem('login'));
        console.log(login.user.id);
        const {books,games,courses} = login.user;
        setInitialState({
            books,
            games,
            courses
        });

        axios.get('/fsz/api/users/', {
            headers: { 'x-auth-token': login.token }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },[props.history]);

    return (
        <div style={{position:"relative"}}>
            <Header />
            <Box className="home-box">
                <Logout />
                <Categories categoriesList={categoriesList} setCategory={setCategory} />
                <Feed category={category}/>
                <Progress />
            </Box>
        </div>
    );
}

export default connect(null,{
    setInitialState,
})(Home);