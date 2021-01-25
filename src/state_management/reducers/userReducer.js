import {SIGN_UP,SIGN_IN,HOTELS_ERROR} from '../types';

const initialState = {
    user: [],
    isAuthenticated : false,
    creationStatus:false
}

export default function(state = initialState, action){
    switch(action.type){
        case SIGN_IN:
            return{
            ...state,
            user:action.payload,
            isAuthenticated: true      
            };   
       
        case SIGN_UP:
            return{
                ...state,
                user:action.payload,
                creationStatus: true,
                isAuthenticated: false
        };

        case HOTELS_ERROR:
            return{
                ...state,
                creationStatus:false     
        }; 

        default:
            return state;
    }
};


 