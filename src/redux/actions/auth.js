export const doLogin = (username, password) => {
  return dispatch => {
    dispatch({
      type: 'AUTH_CLEARERR',
    });
    if (username === 'admin' && password === '1234') {
      dispatch({
        type: 'AUTH_LOGIN',
        payload: 'tokenABC',
      });
    } else {
      dispatch({
        type: 'AUTH_SETERR',
        payload: 'Wrong username or password',
      });
    }
  };
};
