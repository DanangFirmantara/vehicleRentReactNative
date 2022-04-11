import http from '../../helpers/http';
import {
   HISTORY_CLEARERROR,
   HISTORY_CLEARLOADING,
   HISTORY_GETDATA,
   HISTORY_SETERROR,
   HISTORY_SETLOADING,
} from '../reducers/history';

export const getHistory = (token) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: HISTORY_SETLOADING,
         });
         dispatch({
            type: HISTORY_CLEARERROR,
         });
         const { data } = await http(token).get('/history/user?limi=100');
         dispatch({
            type: HISTORY_GETDATA,
            payload: data.results,
         });
         dispatch({
            type: HISTORY_CLEARLOADING,
         });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: HISTORY_SETERROR,
            payload: payload,
         });
         dispatch({
            type: HISTORY_CLEARLOADING,
         });
      }
   };
};
