const initialState = {
   data: [],
   errorMsg: false,
   isLoading: false,
   isError: false,
   pageInfo: {},
   detail: {},
};

export const VEHICLE_GET = 'VEHICLE_GET';
export const VEHICLE_GETPAGEINFO = 'VEHICLE_GETPAGEINFO';
export const VEHICLE_SETLOADING = 'VEHICLE_SETLOADING';
export const VEHICLE_CLEARLOADING = 'VEHICLE_CLEARLOADING';
export const VEHICLE_SETERR = 'VEHICLE_SETERR';
export const VEHICLE_CLEARERR = 'VEHICLE_CLEARERR';
export const VEHICLE_RESET = 'VEHICLE_RESET';
export const VEHICLE_DETAIL = 'VEHICLE_DETAIL';

const vehicle = (state = initialState, action) => {
   switch (action.type) {
      case VEHICLE_GET: {
         return { ...state, data: action.payload };
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
      case VEHICLE_SETERR: {
         return { ...state, isError: true, errorMsg: action.payload };
      }
      case VEHICLE_CLEARERR: {
         return { ...state, isError: false, errorMsg: '' };
      }
      case VEHICLE_RESET: {
         return { ...initialState };
      }
      default: {
         return { ...state };
      }
   }
};

export default vehicle;
