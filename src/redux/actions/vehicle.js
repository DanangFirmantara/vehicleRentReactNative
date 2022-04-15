import RNFetchBlob from 'rn-fetch-blob';
import { BACKEND_URL } from '../../../env';
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
   VEHICLE_SETSUCCESS,
} from '../reducers/vehicle';
// import { NativeModules } from 'react-native';
// const RNFetchBlob = NativeModules.RNFetchBlob;

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

export const addVehicle = (token, dataAdded) => {
   return async (dispatch) => {
      try {
         dispatch({ type: VEHICLE_SETLOADING });
         dispatch({ type: VEHICLE_CLEARERR });
         console.log(token, 'data token');
         console.log(dataAdded, 'data updated');
         let dataChange = [];
         if (dataAdded.image) {
            dataChange.push({
               name: 'image',
               filename: dataAdded.image.fileName,
               type: dataAdded.image.type,
               data: RNFetchBlob.wrap(dataAdded.image.uri),
            });
         }
         Object.keys(dataAdded).forEach((item) => {
            if (item) {
               dataChange.push({
                  name: `${item}`,
                  data: String(dataAdded[item]),
               });
            }
         });
         console.log(dataAdded, 'data change');
         const { data } = await RNFetchBlob.fetch(
            'POST',
            `${BACKEND_URL}/vehicles`,
            {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data',
            },
            dataChange,
         );
         console.log(data);
         dispatch({
            type: VEHICLE_DETAIL,
            payload: JSON.parse(data).results[0],
         });
         dispatch({
            type: VEHICLE_SETSUCCESS,
            payload: JSON.parse(data).message,
         });
         console.log(data, 'ini data dari backend bg');
         dispatch({ type: VEHICLE_CLEARLOADING });
      } catch (err) {
         let payload = '';
         if (err.response) {
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
