import { createSlice } from "@reduxjs/toolkit";
import { UserReducerTypes } from "./user.types";

const INIT_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

// const userReducerOld = (state = INIT_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case UserReducerTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;
