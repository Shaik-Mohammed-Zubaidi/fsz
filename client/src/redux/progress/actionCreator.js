import * as actionConstants from './actionConstants';

export const setInitialState = (receivedState) =>{
    return {
        type: actionConstants.SET_INITIAL_STATE,
        payload: receivedState,
    }
};

export const addGame = (receivedVal) =>{
    return {
        type: actionConstants.ADD_GAME,
        payload: receivedVal
    }
};

export const removeGame= (receivedVal) =>{
    return {
        type: actionConstants.REMOVE_GAME,
        payload: receivedVal
    }
};

export const addBook = (receivedVal) =>{
    return {
        type: actionConstants.ADD_BOOK,
        payload: receivedVal
    }
};

export const removeBook = (receivedVal) =>{
    return {
        type: actionConstants.REMOVE_BOOK,
        payload: receivedVal
    }
};

export const addCourse = (receivedVal) =>{
    return {
        type: actionConstants.ADD_COURSE,
        payload: receivedVal
    }
};

export const removeCourse = (receivedVal) =>{
    return {
        type: actionConstants.REMOVE_COURSE,
        payload: receivedVal
    }
};