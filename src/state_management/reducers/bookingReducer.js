import {HOTELS_ERROR,POST_BOOKING} from '../types';

const initialState = {
    merror:'',
    booking:[]
}

export default function(state = initialState, action){
    switch(action.type){    
        case HOTELS_ERROR:
            return{
                ...state,
                merror:action.payload     
            }; 
        case POST_BOOKING:
            return{
                ...state,
                booking:action.payload,
            }
        default:
            return state;
    }
};


 