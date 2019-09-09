import { ADD_EVENT } from "../constants/action-types";

export const addEvent = (state = "", action) => {
  switch (action.type) {
    case ADD_EVENT:
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.payload)
      });
    default:
      return state;
  }
};
