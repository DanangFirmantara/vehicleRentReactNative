/* eslint-disable no-shadow */
import {
   RESERVATION_INCQUANTITY,
   RESERVATION_DECQUANTITY,
   RESERVATION_SETENDDATE,
   RESERVATION_SETSTARTDATE,
   RESERVATION_CLEARDATA,
   RESERVATION_SETLOADING,
   RESERVATION_CLEARERROR,
   RESERVATION_SUCCESSMSG,
   RESERVATION_CLEARLOADING,
   RESERVATION_ERRORMSG,
   RESERVATION_GETDATA,
} from '../reducers/reservation';

import qs from 'query-string';
import http from '../../helpers/http';

export const incQuantity = () => {
   return (dispatch) => {
      dispatch({
         type: RESERVATION_INCQUANTITY,
      });
   };
};
export const decQuantity = () => {
   return (dispatch) => {
      dispatch({
         type: RESERVATION_DECQUANTITY,
      });
   };
};
export const startDate = (startDate) => {
   return (dispatch) => {
      console.log(startDate, 'ini data reduxnya bg');
      dispatch({
         type: RESERVATION_SETSTARTDATE,
         payload: startDate,
      });
   };
};
export const endDate = (endDate) => {
   return (dispatch) => {
      dispatch({
         type: RESERVATION_SETENDDATE,
         payload: endDate,
      });
   };
};
export const reservationClear = () => {
   return (dispatch) => {
      dispatch({
         type: RESERVATION_CLEARDATA,
      });
   };
};
export const postReservation = (
   idCard,
   name,
   lastName,
   contact,
   email,
   payment,
) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: RESERVATION_SETLOADING,
         });
         dispatch({
            type: RESERVATION_CLEARERROR,
         });
         const param = qs.stringify({
            idCard,
            name,
            lastName,
            contact,
            email,
            payment,
         });
         const { data } = await http().post('/reservation', param);
         dispatch({
            type: RESERVATION_GETDATA,
            payload: data.results[0],
         });
         dispatch({
            type: RESERVATION_SUCCESSMSG,
            payload: data.message,
         });
         dispatch({
            type: RESERVATION_CLEARLOADING,
         });
      } catch (err) {
         let payload = '';
         if (err.response) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: RESERVATION_ERRORMSG,
            payload: payload,
         });
         dispatch({
            type: RESERVATION_SETLOADING,
         });
      }
   };
};
