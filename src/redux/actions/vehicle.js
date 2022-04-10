import http from '../../helpers/http';
import {
   VEHICLE_CLEARERR,
   VEHICLE_GET,
   VEHICLE_GETPAGEINFO,
   VEHICLE_SETLOADING,
   VEHICLE_CLEARLOADING,
   VEHICLE_RESET,
   VEHICLE_SETERR,
   VEHICLE_DETAIL,
} from '../reducers/vehicle';

export const getVehicle = () => {
   return async (dispatch) => {
      try {
         dispatch({
            type: VEHICLE_SETLOADING,
         });
         dispatch({
            type: VEHICLE_CLEARERR,
         });
         const { data } = await http().get('/vehicles?limit=100');
         dispatch({
            type: VEHICLE_GET,
            payload: data.results,
         });
         dispatch({
            type: VEHICLE_GETPAGEINFO,
            payload: data.pageInfo,
         });
         dispatch({
            type: VEHICLE_CLEARLOADING,
         });
      } catch (err) {
         let payload = '';
         if (err.reponse) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: VEHICLE_SETERR,
            payload: payload,
         });
         dispatch({
            type: VEHICLE_CLEARLOADING,
         });
      }
   };
};

export const vehicleReset = () => {
   return (dispatch) => {
      dispatch({
         type: VEHICLE_RESET,
      });
   };
};

export const getDetail = (id) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: VEHICLE_SETLOADING,
         });
         dispatch({
            type: VEHICLE_CLEARERR,
         });
         const { data } = await http().get(`/vehicles?id=${id}`);
         dispatch({
            type: VEHICLE_DETAIL,
            payload: data.results[0],
         });
         dispatch({
            type: VEHICLE_CLEARLOADING,
         });
      } catch (err) {
         let payload = '';
         if (err.reponse) {
            payload = err.response.data.message;
         } else {
            payload = err.message;
         }
         dispatch({
            type: VEHICLE_SETERR,
            payload: payload,
         });
         dispatch({
            type: VEHICLE_CLEARLOADING,
         });
      }
   };
};
export const vehicleLoading = () => {
   return (dispatch) => {
      dispatch({
         type: VEHICLE_SETLOADING,
      });
   };
};
