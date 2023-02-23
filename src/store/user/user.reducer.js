import { UserReducerTypes } from "./user.types";

const INIT_STATE = {
  currentUser: null,
};

const userReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserReducerTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
