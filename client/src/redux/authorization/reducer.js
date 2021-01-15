import * as actions from './actionConstants';

const INIT_STATE= false;

export default function myReducer(state= INIT_STATE, action){
    switch (action.type) {
        case actions.LOGGING_IN:
            return !state;
        case actions.LOGGING_OUT:
            return !state;
        default:
            return state;
    }
}