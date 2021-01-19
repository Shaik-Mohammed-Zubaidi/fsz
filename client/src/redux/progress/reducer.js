import * as actionConstants from './actionConstants';

const INIT_STATE= {
    games: [], 
    books: [], 
    courses: [],
}

export default function myReducer(state= INIT_STATE, action){
    switch (action.type) {
        case actionConstants.SET_INITIAL_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case actionConstants.ADD_GAME:
            return {
                ...state,
                games: [...state.games,action.payload],
            }
        
        case actionConstants.REMOVE_GAME:
            if(state.games.length>0){
                return {
                    ...state,
                    games: state.games.filter(game=> game.title!== action.payload),
                }
            }
            return state;
        
        case actionConstants.ADD_BOOK:
            return {
                ...state,
                books: [...state.books,action.payload],
            }
        
        case actionConstants.REMOVE_BOOK:
            if(state.books.length>0){
                return {
                    ...state,
                    books: state.books.filter(book=> book.title!== action.payload),
                }
            }
            return state;
        
        case actionConstants.ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses,action.payload],
            }
        
        case actionConstants.REMOVE_COURSE:
            if(state.courses.length>0){
                return {
                    ...state,
                    courses: state.courses.filter(course=> course.title!== action.payload),
                }
            }
            return state;
        
        default:
            return state;
    }
}