import { CustomersAction } from "../../Redux/RootAction";
import { AxiosGet } from "../Axios/method";

export const getCustomer = (dispatch) => {
  AxiosGet("/api/customers")
    .then((res) => {
      dispatch(CustomersAction.fetchCustomers(res));
    })
    .catch((e) => console.log(e));
};
