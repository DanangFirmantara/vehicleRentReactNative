/* eslint-disable no-shadow */
import {
   RESERVATION_INCQUANTITY,
   RESERVATION_DECQUANTITY,
   RESERVATION_SETENDDATE,
   RESERVATION_SETSTARTDATE,
   RESERVATION_CLEARDATA,
} from '../reducers/reservation';

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
