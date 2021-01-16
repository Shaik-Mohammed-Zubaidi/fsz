import * as actionConstants from './actionConstants';

export const setInitialState = (receivedState) =>{
    return {
        type: actionConstants.SET_INITIAL_STATE,
        payload: receivedState,
    }
};

export const incrementGames = () =>{
    return {
        type: actionConstants.INCREMENT_GAMES,
    }
};

export const decrementGames= () =>{
    return {
        type: actionConstants.DECREMENT_GAMES,
    }
};

export const incrementBooks = () =>{
    return {
        type: actionConstants.INCREMENT_BOOKS,
    }
};

export const decrementBooks = () =>{
    return {
        type: actionConstants.DECREMENT_BOOKS,
    }
};

export const incrementCourses = () =>{
    return {
        type: actionConstants.INCREMENT_COURSES,
    }
};

export const decrementCourses = () =>{
    return {
        type: actionConstants.DECREMENT_COURSES,
    }
};