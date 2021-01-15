import React from 'react';
import {Box, Card} from "@material-ui/core";
import { connect } from 'react-redux';

function Progress({gamesPlayed, booksRead, coursesCompleted}) {
    return (
        <Box width="25%">
            <h2>Progress</h2>
            <Card>
                <div>games: {gamesPlayed}</div>
                <div>books: {booksRead}</div>
                <div>courses: {coursesCompleted}</div>
            </Card>
        </Box>
    );
};

const mapStateToProps = (state) =>{
    return {
        gamesPlayed: state.Games,
        booksRead: state.Books,
        coursesCompleted: state.Courses
    }
}

export default connect(mapStateToProps,null)(Progress);