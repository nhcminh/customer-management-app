import { AxiosPost } from "../Axios/method";

export const userLogin = (body = {}) => {
  console.log(body);
  return AxiosPost("/api/auth/login", body);
};
