import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  states: [],
};

const states = createSlice({
  name: "statesSlice",
  initialState: initialState,
  reducers: {
    fetchStates(state, { payload }) {
      state.states = payload;
    },
  },
});

const { actions, reducer } = states;
export { actions as StatesAction, reducer as StatesReducer };
