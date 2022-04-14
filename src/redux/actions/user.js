import http from '../../helpers/http';
import {
   USER_SETLOADING,
   USER_CLEARLOADING,
   USER_SETERROR,
   USER_CLEARERR,
   USER_GETDATA,
} from '../reducers/user';
import RNFetchBlob from 'rn-fetch-blob';
import { BACKEND_URL } from '../../../env';

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

export const updateProfile = (token, dataUpdated) => {
   return async (dispatch) => {
      try {
         dispatch({ type: USER_SETLOADING });
         dispatch({ type: USER_CLEARERR });
         console.log(token, 'data token');
         console.log(dataUpdated, 'data updated');
         let dataChange = [];
         if (dataUpdated.image) {
            dataChange.push({
               name: 'image',
               filename: dataUpdated.image.fileName,
               type: dataUpdated.image.type,
               data: RNFetchBlob.wrap(dataUpdated.image.uri),
            });
         }
         Object.keys(dataUpdated).forEach((item) => {
            if (item) {
               dataChange.push({
                  name: `${item}`,
                  data: String(dataUpdated[item]),
               });
            }
         });
         console.log(dataChange, 'data change');
         const { data } = await RNFetchBlob.fetch(
            'PATCH',
            `${BACKEND_URL}/users`,
            {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data',
            },
            dataChange,
         );
         console.log(data);
         dispatch({
            type: USER_GETDATA,
            payload: JSON.parse(data).results[0],
         });
         console.log(data, 'ini data dari backend bg');
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
