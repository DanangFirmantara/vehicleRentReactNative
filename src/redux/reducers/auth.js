const initialState = {
  token: null,
  isError: false,
  errorMsg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {...state, token: action.payload};
    }
    case 'AUTH_LOGOUT': {
      return {...initialState};
    }
    case 'AUTH_SETERR': {
      return {...state, isError: true, errorMsg: action.payload};
    }
    case 'AUTH_CLEARERR': {
      return {...state, isError: false, errorMsg: ''};
    }
    default: {
      return {...state};
    }
  }
};

export default auth;
