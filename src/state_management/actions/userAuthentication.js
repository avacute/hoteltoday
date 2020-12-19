import {SIGN_IN} from '../types';
import Axios from 'axios'
import {API_BASE} from '../../env';
export const userAuthentication = (user) => dispatch => {
      return  Axios(
            {
                method:'post',
                url: API_BASE + '/hoteltoday/oauth/token',
                headers:{
                    "Content-Type": "application/json",
                },
                data:{
                    username: user.username,
                    password: user.password
                }
            }
        ).then(
            res =>{
                localStorage.setItem('mcode', res.data.permissions['merchant_code']);
                dispatch({
                    type: SIGN_IN,
                    payload:res.data
            });
        })
        
}