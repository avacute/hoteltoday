import {GET_HOTELS,HOTELS_ERROR,GET_HOTEL_BY_ID,GET_SUITES} from '../types';

const initialState = {
    hotels: [],
    merror:'',
    suites:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_HOTELS:
            return{
            ...state,
            hotels:action.payload     
            };  
            
        case HOTELS_ERROR:
            return{
                ...state,
                merror:action.payload     
            }; 
        
        case GET_HOTEL_BY_ID:
            return{
                ...state,
                hotels:action.payload

            }
        
        case GET_SUITES:
            return{
                ...state,
                suites:action.payload
            }
        default:
            return state;
    }
};


 