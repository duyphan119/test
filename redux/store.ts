import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import catsSlice from "./cartSlice";

export interface State {
  tick: string;
}

const combinedReducer = combineReducers({
  cats: catsSlice,
});
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export const makeStore = () => {
  return configureStore({
    reducer: reducer,
  });
};

export const wrapper = createWrapper(makeStore);