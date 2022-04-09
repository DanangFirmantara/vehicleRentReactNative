const initialState = {
   quantity: 0,
   startDate: '',
   endDate: '',
};

export const RESERVATION_INCQUANTITY = 'RESERVATION_INCQUANTITY';
export const RESERVATION_DECQUANTITY = 'RESERVATION_DECQUANTITY';
export const RESERVATION_SETSTARTDATE = 'RESERVATION_SETSTARTDATE';
export const RESERVATION_SETENDDATE = 'RESERVATION_SETENDDATE';
export const RESERVATION_CLEARDATA = 'RESERVATION_CLEARDATA';

const reservation = (state = initialState, action) => {
   switch (action.type) {
      case RESERVATION_INCQUANTITY: {
         return { ...state, quantity: state.quantity + 1 };
      }
      case RESERVATION_DECQUANTITY: {
         return { ...state, quantity: state.quantity - 1 };
      }
      case RESERVATION_SETSTARTDATE: {
         return { ...state, startDate: action.payload };
      }
      case RESERVATION_SETENDDATE: {
         return { ...state, endDate: action.payload };
      }
      case RESERVATION_CLEARDATA: {
         return { ...initialState };
      }
      default: {
         return { ...state };
      }
   }
};

export default reservation;
