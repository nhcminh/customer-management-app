import { AxiosPost } from "../Axios/method";

export const userInfomationUpdate = (body = {}, params) => {
  return AxiosPost("/api/users", body, params);
};
