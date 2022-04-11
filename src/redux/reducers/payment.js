const initialState = {
   data: {},
   isLoading: false,
   errorMsg: '',
   successMsg: '',
};

export const PAYMENT_SETLOADING = 'PAYMENT_SETLOADING';
export const PAYMENT_CLEARLOADING = 'PAYMENT_CLEARLOADING';
export const PAYMENT_GETDATA = 'PAYMENT_GETDATA';
export const PAYMENT_SETERROR = 'PAYMENT_SETERROR';
export const PAYMENT_CLEARERROR = 'PAYMENT_CLEARERROR';
export const PAYMENT_SETSUCCESSMSG = 'PAYMENT_SETSUCCESSMSG';
export const PAYMENT_CLEARSUCCESSMSG = 'PAYMENT_CLEARSUCCESSMSG';

const payment = (state = initialState, action) => {
   switch (action.type) {
      case PAYMENT_SETLOADING: {
         return { ...state, isLoading: true };
      }
      case PAYMENT_CLEARLOADING: {
         return { ...state, isLoading: false };
      }
      case PAYMENT_SETERROR: {
         return { ...state, errorMsg: action.payload };
      }
      case PAYMENT_CLEARERROR: {
         return { ...state, errorMsg: '' };
      }
      case PAYMENT_SETSUCCESSMSG: {
         return { ...state, successMsg: action.payload };
      }
      case PAYMENT_CLEARSUCCESSMSG: {
         return { ...state, successMsg: '' };
      }
      case PAYMENT_GETDATA: {
         return { ...state, data: action.payload };
      }
      default: {
         return { ...state };
      }
   }
};

export default payment;
