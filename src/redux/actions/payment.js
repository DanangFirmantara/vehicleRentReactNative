import {
   PAYMENT_CLEARERROR,
   PAYMENT_CLEARLOADING,
   PAYMENT_GETDATA,
   PAYMENT_SETERROR,
   PAYMENT_SETLOADING,
   PAYMENT_SETSUCCESSMSG,
} from '../reducers/payment';

import qs from 'query-string';
import http from '../../helpers/http';

export const postPayment = (
   rentStartDate,
   rentEndDate,
   vehicleId,
   quantity,
   idReservation,
   token,
) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: PAYMENT_SETLOADING,
         });
         dispatch({
            type: PAYMENT_CLEARERROR,
         });
         const param = qs.stringify({
            rentStartDate,
            rentEndDate,
            vehicleId,
            quantity,
            idReservation,
         });
         const { data } = await http(token).post('/history', param);
         dispatch({
            type: PAYMENT_GETDATA,
            payload: data.results[0],
         });
         dispatch({
            type: PAYMENT_SETSUCCESSMSG,
            payload: data.message,
         });
         dispatch({
            type: PAYMENT_CLEARLOADING,
         });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: PAYMENT_SETERROR,
            payload: payload,
         });
         dispatch({
            type: PAYMENT_CLEARLOADING,
         });
      }
   };
};
