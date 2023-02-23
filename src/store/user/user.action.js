import { createAction } from "../../utils/helpers";
import { UserReducerTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(UserReducerTypes.SET_CURRENT_USER, user);
};
