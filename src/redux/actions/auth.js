import http from '../../helpers/http';
import qs from 'query-string';

// export const doLogin = (username, password) => {
//    return dispatch => {
//       dispatch({
//          type: 'AUTH_CLEARERR',
//       });

//       if (username === 'admin' && password === '1234') {
//          dispatch({
//             type: 'AUTH_LOGIN',
//             payload: 'tokenABC',
//          });
//       } else {
//          dispatch({
//             type: 'AUTH_SETERR',
//             payload: 'Wrong username or password',
//          });
//       }
//    };
// };

export const doLogin = (username, password) => {
   return async dispatch => {
      try {
         dispatch({
            type: 'AUTH_CLEARERR',
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
