const initialState = {
   token: null,
   isError: false,
   errorMsg: '',
   successMsg: '',
   isLoading: false,
};
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_SETSUCC = 'AUTH_SETSUCC';
export const AUTH_CLEARSUCC = 'AUTH_CLEARSUCC';
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SETERR = 'AUTH_SETERR';
export const AUTH_CLEARERR = 'AUTH_CLEARERR';

const auth = (state = initialState, action) => {
   switch (action.type) {
      case 'AUTH_LOGIN': {
         return {...state, token: action.payload};
      }
      case 'AUTH_LOGOUT': {
         return {...initialState};
      }
      case AUTH_SETSUCC: {
         return {...state, successMsg: action.payload};
      }
      case AUTH_CLEARSUCC: {
         return {...state, successMsg: ''};
      }
      case 'AUTH_LOADING': {
         return {...state, isLoading: !state.isLoading};
      }
      case 'AUTH_SETERR': {
         return {...state, isError: true, errorMsg: action.payload};
      }
      case AUTH_CLEARERR: {
         return {...state, isError: false, errorMsg: ''};
      }
      default: {
         return {...state};
      }
   }
};

export default auth;
