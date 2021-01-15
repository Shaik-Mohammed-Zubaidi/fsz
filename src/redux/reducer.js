import * as actionConstants from './actionConstants';

const INIT_STATE= {
    Games: 0, 
    Books: 0, 
    Courses: 0,
}

export default function myReducer(state= INIT_STATE, action){
    switch (action.type) {
        case actionConstants.INCREMENT_GAMES:
            return {
                ...state,
                Games: state.Games+1,
            }
        
        case actionConstants.DECREMENT_GAMES:
            if(state.Games>0){
                return {
                    ...state,
                    Games: state.Games-1,
                }
            }
            return state;
        
        case actionConstants.INCREMENT_BOOKS:
            return {
                ...state,
                Books: state.Books+1,
            }
        
        case actionConstants.DECREMENT_BOOKS:
            if(state.Books>0){
                return {
                    ...state,
                    Books: state.Books-1,
                }
            }
            return state;
        
        case actionConstants.INCREMENT_COURSES:
            return {
                ...state,
                Courses: state.Courses+1,
            }
        
        case actionConstants.DECREMENT_COURSES:
            if(state.Courses>0){
                return {
                    ...state,
                    Courses: state.Courses-1,
                }
            }
            return state;
        
        default:
            return state;
    }
}