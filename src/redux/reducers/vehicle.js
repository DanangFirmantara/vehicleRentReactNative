const initialState = {
   data: [],
   errorMsg: false,
   isLoading: false,
   isError: false,
   pageInfo: {},
};

export const VEHICLE_GET = 'VEHICLE_GET';
export const VEHICLE_GETPAGEINFO = 'VEHICLE_GETPAGEINFO';
export const VEHICLE_LOADING = 'VEHICLE_LOADING';
export const VEHICLE_SETERR = 'VEHICLE_SETERR';
export const VEHICLE_CLEARERR = 'VEHICLE_CLEARERR';
export const VEHICLE_RESET = 'VEHICLE_RESET';

const vehicle = (state = initialState, action) => {
   switch (action.type) {
      case VEHICLE_GET: {
         return { ...state, data: action.payload };
      }
      case VEHICLE_GETPAGEINFO: {
         return { ...state, pageInfo: action.payload };
      }
      case VEHICLE_LOADING: {
         return { ...state, isLoading: !state.isLoading };
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
