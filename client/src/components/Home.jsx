import React, { useState } from 'react';
import {Box} from "@material-ui/core";
import Categories from "./Categories";
import Feed from "./Feed";
import Progress from "./Progress";

function Home() {
    const categoriesList= ["Games","Books","Courses"];
    const [category,setCategory] = useState("Games");

    return (
        <div>
            <h1>What To Do?</h1>
            <h3>well we'll help you in knowing</h3>
            <Box display="flex" justify="center" justifyContent="space-between" minHeight="100vh" padding="0 8vh">
                <Categories categoriesList={categoriesList} setCategory={setCategory} />
                <Feed category={category}/>
                <Progress />
            </Box>
        </div>
    );
}

export default Home;