import {GET_HOTELS,GET_HOTELS_ERROR} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';

export const getHotels = () => async dispatch => {
    try {
        const response = await Axios(
            {
                method: 'get',
                url: API_BASE + '/hoteltoday/booking',
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
            type: GET_HOTELS_ERROR,
            payload: "An Error Occured while fetching"
        });
    }
};


