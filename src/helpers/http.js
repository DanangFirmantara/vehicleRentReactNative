import axios from 'axios';
import { BACKEND_URL } from '../../env';

const http = (token, useUpload = false) => {
   const headers = {};
   if (token) {
      headers.Authorization = `Bearer ${token}`;
   }
   if (useUpload) {
      headers['Content-Type'] = 'multipart/form-data';
   }
   return axios.create({
      baseURL: BACKEND_URL,
      headers,
   });
};

export default http;
