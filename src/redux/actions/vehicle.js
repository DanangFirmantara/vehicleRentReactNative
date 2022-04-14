import { dinamisUrl } from '../../helpers/dinamisUrl';
import http from '../../helpers/http';
import {
   VEHICLE_CLEARERR,
   VEHICLE_GETPAGEINFO,
   VEHICLE_SETLOADING,
   VEHICLE_CLEARLOADING,
   VEHICLE_RESET,
   VEHICLE_SETERR,
   VEHICLE_DETAIL,
   VEHICLE_GETDATA,
   VEHICLE_GETDATACATEGORY,
} from '../reducers/vehicle';

export const getVehicle = (param = '') => {
   return async (dispatch) => {
      try {
         dispatch({
            type: VEHICLE_SETLOADING,
         });
         dispatch({
            type: VEHICLE_CLEARERR,
         });
         const url = dinamisUrl(param);
         const { data } = await http().get(`/vehicles?limit=100&${url}`);
         console.log(data, param);
         dispatch({
            type: VEHICLE_GETDATA,
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

export const getVehicleCategory = (idCategory) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: VEHICLE_SETLOADING,
         });
         dispatch({
            type: VEHICLE_CLEARERR,
         });
         const { data } = await http().get(`/list?filterBy=${idCategory}`);
         dispatch({
            type: VEHICLE_GETDATACATEGORY,
            payload: data.results,
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
