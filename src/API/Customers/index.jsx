import { CustomersAction } from "../../Redux/RootAction";
import { AxiosDelete, AxiosGet, AxiosPut } from "../Axios/method";

export const getCustomers = (dispatch) => {
  AxiosGet("/api/customers")
    .then((res) => {
      dispatch(CustomersAction.fetchCustomers(res));
    })
    .catch((e) => console.log(e));
};
export const deleteCustomer = (dispatch, id) => {
  AxiosDelete(`/api/customers/${id}`);
  getCustomers(dispatch);
};

export const putCustomer = (
  dispatch,
  { id, firstName, lastName, gender, address, city }
) => {
  AxiosPut(
    "/api/customers/",
    { id, firstName, lastName, gender, address, city },
    id
  );
  getCustomers(dispatch);
};
