import {combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import hotelsReducer from './hotelsReducer';


export default combineReducers({
    authenticate : authenticateReducer,
    getHotels: hotelsReducer
});