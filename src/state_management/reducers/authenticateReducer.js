import {SIGN_IN} from '../types';

const initialState = {
    user: [],
    isAuthenticated : false
}

export default function(state = initialState, action){
    switch(action.type){
        case SIGN_IN:
            return{
            ...state,
            user:action.payload,
            isAuthenticated: true      
            };   
        default:
            return state;
    }
};


 