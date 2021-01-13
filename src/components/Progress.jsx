import React from 'react';
import {Box, Card} from "@material-ui/core";

export default function Progress({completedThings}) {
    return (
        <Box width="25%">
            <h2>Progress</h2>
            <Card>
                <div>games: {completedThings.Games}</div>
                <div>books: {completedThings.Books}</div>
                <div>courses: {completedThings.Courses}</div>
                
            </Card>
        </Box>
    );
};