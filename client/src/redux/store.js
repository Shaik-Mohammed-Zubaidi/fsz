import { combineReducers, createStore } from 'redux';
import progressReducer from './progress/reducer';
import authorizationReducer from './authorization/reducer';

const rootReducer = combineReducers({
    progressReducer,
    authorizationReducer,
})

const store= createStore(rootReducer);

export default store;