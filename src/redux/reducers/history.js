const initialState = {
   isLoading: false,
   data: [],
   errorMsg: '',
};

export const HISTORY_SETLOADING = 'HISTORY_SETLOADING';
export const HISTORY_CLEARLOADING = 'HISTORY_CLEARLOADING';
export const HISTORY_GETDATA = 'HISTORY_GETDATA';
export const HISTORY_SETERROR = 'HISTORY_SETERROR';
export const HISTORY_CLEARERROR = 'HISTORY_CLEARERROR';

const history = (state = initialState, action) => {
   switch (action.type) {
      case HISTORY_SETLOADING: {
         return { ...state, isLoading: true };
      }
      case HISTORY_CLEARLOADING: {
         return { ...state, isLoading: false };
      }
      case HISTORY_SETERROR: {
         return { ...state, errorMsg: action.payload };
      }
      case HISTORY_CLEARERROR: {
         return { ...state, errorMsg: '' };
      }
      case HISTORY_GETDATA: {
         return { ...state, data: action.payload };
      }
      default: {
         return { ...state };
      }
   }
};

export default history;
