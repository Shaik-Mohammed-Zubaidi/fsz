import * as actions from './actionConstants';

export const loginTheUser = () =>{
    return {
        type: actions.LOGGING_IN,
    }
}

export const logoutTheUser = () =>{
    return {
        type: actions.LOGGING_OUT,
    }
}