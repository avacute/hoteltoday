import {combineReducers } from 'redux';
import userReducer from './userReducer';
import hotelsReducer from './hotelsReducer';
import bookingReducer from './bookingReducer';


export default combineReducers({
    user : userReducer,
    getHotels : hotelsReducer,
    bookings : bookingReducer
});