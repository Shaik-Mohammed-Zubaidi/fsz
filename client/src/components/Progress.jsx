import React from 'react';
import {Box, Card} from "@material-ui/core";
import { connect } from 'react-redux';
import {PieChart} from 'react-minimal-pie-chart'

function Progress({gamesPlayed, booksRead, coursesCompleted}) {

    const defaultLabelStyle = {
        fontSize: '10px',
        fontFamily: 'sans-serif',
    };

    const getChart = () =>{
        if(gamesPlayed===0 && booksRead===0 && coursesCompleted===0){
            return <div>No Progress Yet</div>;
        }
        return (
            <PieChart
                data={[
                    { title: 'Games', value: (gamesPlayed), color: '#E38627' },
                    { title: 'Books', value: (booksRead), color: '#C13C37' },
                    { title: 'Courses', value: (coursesCompleted), color: '#6A2135' },
                ]}
                label={({dataEntry})=> dataEntry.percentage!==0? Math.round(dataEntry.percentage)+ '%' : ""}
                labelStyle={defaultLabelStyle}
                animate
                style={{width: "70%", margin: "10px 0 10px 0" }}
            />
        );
    }

    return (
        <Box width="25%" position="relative">
            <div style={{ position: "sticky", top: "5vh" }}>
                <h2>Progress</h2>
                <Card style={{padding: "5% 0 5% 0",fontSize: "3vh"}} >
                    {getChart()}
                    <div>games: {gamesPlayed}</div>
                    <div>books: {booksRead}</div>
                    <div>courses: {coursesCompleted}</div>
                </Card>
            </div>
        </Box>
    );
};

const mapStateToProps = (state) =>{
    return {
        gamesPlayed: state.progressReducer.games.length,
        booksRead: state.progressReducer.books.length,
        coursesCompleted: state.progressReducer.courses.length,
    }
}

export default connect(mapStateToProps,null)(Progress);