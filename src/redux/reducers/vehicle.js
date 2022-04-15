const initialState = {
   data: [],
   errorMsg: '',
   successMsg: '',
   isLoading: false,
   isError: false,
   pageInfo: {},
   detail: {},
   dataCategory: [],
};

export const VEHICLE_GETDATA = 'VEHICLE_GETDATA';
export const VEHICLE_GETDATACATEGORY = 'VEHICLE_GETDATACATEGORY';
export const VEHICLE_GETPAGEINFO = 'VEHICLE_GETPAGEINFO';
export const VEHICLE_SETLOADING = 'VEHICLE_SETLOADING';
export const VEHICLE_CLEARLOADING = 'VEHICLE_CLEARLOADING';
export const VEHICLE_SETERR = 'VEHICLE_SETERR';
export const VEHICLE_CLEARERR = 'VEHICLE_CLEARERR';
export const VEHICLE_SETSUCCESS = 'VEHICLE_SETSUCCESS';
export const VEHICLE_CLEARSUCCESS = 'VEHICLE_CLEARSUCCESS';
export const VEHICLE_RESET = 'VEHICLE_RESET';
export const VEHICLE_DETAIL = 'VEHICLE_DETAIL';
export const VEHICLE_CLEARMSG = 'VEHICLE_CLEARMSG';

const vehicle = (state = initialState, action) => {
   switch (action.type) {
      case VEHICLE_GETDATA: {
         return { ...state, data: action.payload };
      }
      case VEHICLE_GETDATACATEGORY: {
         return {
            ...state,
            dataCategory: [...state.dataCategory, ...action.payload],
         };
      }
      case VEHICLE_DETAIL: {
         return { ...state, detail: action.payload };
      }
      case VEHICLE_GETPAGEINFO: {
         return { ...state, pageInfo: action.payload };
      }
      case VEHICLE_SETLOADING: {
         return { ...state, isLoading: true };
      }
      case VEHICLE_CLEARLOADING: {
         return { ...state, isLoading: false };
      }
      case VEHICLE_SETSUCCESS: {
         return { ...state, successMsg: action.payload };
      }
      case VEHICLE_CLEARSUCCESS: {
         return { ...state, successMsg: '' };
      }
      case VEHICLE_SETERR: {
         return { ...state, isError: true, errorMsg: action.payload };
      }
      case VEHICLE_CLEARERR: {
         return { ...state, isError: false, errorMsg: '' };
      }
      case VEHICLE_RESET: {
         return { ...initialState };
      }
      case VEHICLE_CLEARMSG: {
         return { ...state, errorMsg: '', successMsg: '' };
      }
      default: {
         return { ...state };
      }
   }
};

export default vehicle;
