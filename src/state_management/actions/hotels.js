import {GET_HOTELS,HOTELS_ERROR,GET_HOTEL_BY_ID,GET_SUITES} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';

export const getHotels = () => async dispatch => {
    try {
        const response = await Axios(
            {
                method: 'get',
                url: API_BASE + 'hotels',
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        dispatch({
            type: GET_HOTELS,
            payload: response.data
        });
    } catch (response) {
        dispatch({
            type: HOTELS_ERROR,
            payload: "An error occured while fetching hotel data"
        });
    }
};


export const getHotelsByID = (id) => async dispatch => {
    try {
        const response = await Axios(
            {
                method: 'get',
                url: API_BASE + 'hotel/' + id,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        dispatch({
            type: GET_HOTEL_BY_ID,
            payload: response.data
        });
    } catch (response) {
        dispatch({
            type: HOTELS_ERROR,
            payload: "hotel record not found"
        });
    }
};


export const getSuiteByHotelID = (id) => async dispatch => {
    try {
        const response = await Axios(
            {
                method: 'get',
                url: API_BASE + 'suites/' + id ,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        dispatch({
            type: GET_SUITES,
            payload: response.data
        });
    } catch (response) {
        dispatch({
            type: HOTELS_ERROR,
            payload: "An error occured while fetching suites data"
        });
    }
};






