import React, { useState } from 'react';
import {Box} from "@material-ui/core";
import Categories from "./Categories";
import Feed from "./Feed";
import Progress from "./Progress";
import { connect } from 'react-redux';
import {logoutTheUser} from '../redux/authorization/actionCreator';
import Header from './Header';

function Home(props) {
    const {isLoggedIn,logoutTheUser} = props;
    const categoriesList= ["Books","Games","Courses"];
    const [category,setCategory] = useState("Books");

    if(!isLoggedIn){
        props.history.push('/login');
    }

    return (
        <div style={{position:"relative"}}>
            <button className="signout-btn" onClick={()=>logoutTheUser()}>Sign Out</button>
            <Header />
            <Box className="home-box">
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

export default connect(mapStateToProps,{
    logoutTheUser,
})(Home);