import {GET_HOTELS,GET_HOTELS_ERROR} from '../types';

const initialState = {
    hotels: [],
    merror:''
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_HOTELS:
            return{
            ...state,
            hotels:action.payload     
            };  
            
        case GET_HOTELS_ERROR:
            return{
                ...state,
                merror:action.payload     
                }; 
        default:
            return state;
    }
};


 