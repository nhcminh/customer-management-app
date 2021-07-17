import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

const customers = createSlice({
  name: "customersSlice",
  initialState: initialState,
  reducers: {
    fetchCustomers(state, { payload }) {
      state.customers = payload;
    },
  },
});

const { actions, reducer } = customers;
export { actions as CustomersAction, reducer as CustomersReducer };
