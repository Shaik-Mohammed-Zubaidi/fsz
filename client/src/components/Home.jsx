import React, { useState } from 'react';
import {Box} from "@material-ui/core";
import Categories from "./Categories";
import Feed from "./Feed";
import Progress from "./Progress";
import { connect } from 'react-redux';
import Header from './Header';
import Logout from '../authorization/Logout';

function Home(props) {
    const {isLoggedIn} = props;
    const categoriesList= ["Books","Games","Courses"];
    const [category,setCategory] = useState("Books");

    if(!isLoggedIn){
        props.history.push('/login');
    }

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

const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.authorizationReducer
    }
}

export default connect(mapStateToProps,null)(Home);