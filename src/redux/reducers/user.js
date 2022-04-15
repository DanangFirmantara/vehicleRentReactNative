export const USER_SETLOADING = 'USER_SETLOADING';
export const USER_CLEARLOADING = 'USER_CLEARLOADING';
export const USER_GETDATA = 'USER_GETDATA';
export const USER_CLEARDATA = 'USER_CLEARDATA';
export const USER_SETERROR = 'USER_SETERROR';
export const USER_CLEARERR = 'USER_CLEAREROR';
export const USER_SETSUCC = 'USER_SETSUCC';
export const USER_CLEARMSG = 'USER_CLEARMSG';

const initialState = {
   data: {},
   errorMsg: '',
   successMsg: '',
   isError: false,
};

const user = (state = initialState, action) => {
   switch (action.type) {
      case USER_SETLOADING: {
         return { ...state, isLoading: true };
      }
      case USER_CLEARLOADING: {
         return { ...state, isLoading: false };
      }
      case USER_GETDATA: {
         return { ...state, data: action.payload };
      }
      case USER_CLEARDATA: {
         return { ...initialState };
      }
      case USER_SETERROR: {
         return { ...state, isError: true, errorMsg: action.payload };
      }
      case USER_CLEARERR: {
         return { ...state, isError: false, errorMsg: '' };
      }
      case USER_CLEARMSG: {
         return { ...state, errorMsg: '', successMsg: '' };
      }
      default: {
         return { ...state };
      }
   }
};

export default user;
