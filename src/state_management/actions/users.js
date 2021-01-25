import {SIGN_UP,SIGN_IN,HOTELS_ERROR} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';
import moment from 'moment/moment.js';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({forceRefresh:true});


export const userAuth = (sendUser) => async dispatch => {
    // history.push('/sandbox/');
    try {
        if(sendUser.email !== "" && sendUser.password !== ""){
                const user = {
                    "grant_type" : "password",
                    "username" : sendUser.email,
                    "password" : sendUser.password,
                }
                console.log(user)
                const response = await Axios(
                    {
                        method: 'post',
                        url: API_BASE + 'oauth/token',
                        data:user,
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Basic " + btoa("123:fola")
                        }
                    }
                )
                // .then(response => {
                    localStorage.setItem('user', response.data);
                    dispatch(
                        {
                            type: SIGN_IN,
                            payload: user
                        }
                    );
                // });
                
        }else{
            dispatch({
                type: HOTELS_ERROR
            });
        }
        
    } catch{
       
    }
};


export const signUp = (email,password,rPassword) => async dispatch => {
    history.push('/sandbox/');
    if(password === rPassword){
        try {
                        const user = {
                            username: email,
                            password: password,
                            fname: "",
                            lname: "",
                            uaddress: "",
                            pnumber: "",
                            isActive: true,
                            isLocked: false,
                            role: "ROLE_USER",
                            createdAt: moment(new Date())
                        }
                        await Axios(
                            {
                                method: 'post',
                                url: API_BASE + 'user/register',
                                data:user,
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            }
                        );
                        dispatch(
                            {
                                type: SIGN_UP,
                                payload: user
                            }
                        );
                
            } catch{
                dispatch({
                    type: HOTELS_ERROR
                });
            }
    }else{
        dispatch({
            type: HOTELS_ERROR,
            payload: "Password Not Match"
        });
    }
};





