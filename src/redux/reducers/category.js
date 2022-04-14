const initialState = {
   isLoading: false,
   errorMsg: '',
   data: [],
};

export const CATEGORY_SETLOADING = 'CATEGORY_SETLOADING';
export const CATEGORY_CLEARLOADING = 'CATEGORY_CLEARLOADING';
export const CATEGORY_SETERROR = 'CATEGORY_SETERROR';
export const CATEGORY_CLEARERROR = 'CATEGORY_CLEARERROR';
export const CATEGORY_GETDATA = 'CATEGORY_GETDATA';
export const CATEGORY_CLEARDATA = 'CATEGORY_CLEARDATA';

const category = (state = initialState, action) => {
   switch (action.type) {
      case CATEGORY_SETLOADING: {
         return { ...state, isLoading: true };
      }
      case CATEGORY_CLEARLOADING: {
         return { ...state, isLoading: false };
      }
      case CATEGORY_SETERROR: {
         return { ...state, errorMsg: action.payload };
      }
      case CATEGORY_CLEARERROR: {
         return { ...state, errorMsg: '' };
      }
      case CATEGORY_GETDATA: {
         return { ...state, data: action.payload };
      }
      case CATEGORY_CLEARDATA: {
         return { ...initialState };
      }
      default: {
         return { ...state };
      }
   }
};
export default category;
