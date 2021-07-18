import { StatesAction } from "../../Redux/RootAction";
import { AxiosGet } from "../Axios/method";

export const getStates = (dispatch) => {
  AxiosGet("/api/states")
    .then((res) => {
      dispatch(StatesAction.fetchStates(res));
    })
    .catch((e) => console.log(e));
};
