import http from '../../helpers/http';
import {
   USER_SETLOADING,
   USER_CLEARLOADING,
   USER_SETERROR,
   USER_CLEARERR,
   USER_GETDATA,
} from '../reducers/user';

export const getProfile = (token) => {
   return async (dispatch) => {
      try {
         dispatch({ type: USER_SETLOADING });
         dispatch({ type: USER_CLEARERR });
         const { data } = await http(token).get('/profiles');
         console.log(data.results);
         dispatch({
            type: USER_GETDATA,
            payload: data.results[0],
         });
         dispatch({ type: USER_CLEARLOADING });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: USER_SETERROR,
            payload: payload,
         });
         dispatch({
            type: USER_CLEARLOADING,
         });
      }
   };
};
