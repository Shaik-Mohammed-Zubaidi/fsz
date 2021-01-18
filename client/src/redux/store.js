import { combineReducers, createStore } from 'redux';
import progressReducer from './progress/reducer';

const rootReducer = combineReducers({
    progressReducer,
})

const store= createStore(rootReducer);

export default store;