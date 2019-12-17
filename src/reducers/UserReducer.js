import { actionTypes } from '/home/artur/praca_inż/sparcks/src/actions/UserActions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
