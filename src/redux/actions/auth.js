import http from '../../helpers/http';
import qs from 'query-string';
import {AUTH_CLEARERR, AUTH_CLEARSUCC, AUTH_SETSUCC} from '../reducers/auth';

export const doLogin = (username, password) => {
   return async dispatch => {
      try {
         dispatch({
            type: 'AUTH_CLEARERR',
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
         const param = qs.stringify({
            username,
            password,
         });

         const {data} = await http().post('/auth/login', param);
         dispatch({
            type: 'AUTH_LOGIN',
            payload: data.results[0],
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: 'AUTH_SETERR',
            payload: payload,
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
      }
   };
};

export const doLogout = () => {
   return dispatch => {
      dispatch({
         type: 'AUTH_LOGOUT',
      });
   };
};
export const doSignUp = (email, username, contact, password) => {
   return async dispatch => {
      try {
         dispatch({
            type: 'AUTH_CLEARERR',
         });
         dispatch({
            type: AUTH_CLEARSUCC,
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
         const param = qs.stringify({
            username,
            password,
            email,
            contact,
         });

         const {data} = await http().post('/users', param);
         console.log(data);
         dispatch({
            type: AUTH_SETSUCC,
            payload: data.message,
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: 'AUTH_SETERR',
            payload: payload,
         });
         dispatch({
            type: 'AUTH_LOADING',
         });
      }
   };
};

export const clearMsg = () => {
   return dispatch => {
      dispatch({
         type: AUTH_CLEARSUCC,
      });
      dispatch({
         type: AUTH_CLEARERR,
      });
   };
};
