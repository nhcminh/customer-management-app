import { request } from "./config";

const domain = "http://localhost:8080";

export const AxiosGet = (endPoint, params = "") => {
  return request({
    url: `${domain}${endPoint}${params}`,
    method: "GET",
    params: params,
  });
};

export const AxiosPost = (endPoint, body = {}, params = "") => {
  return request({
    url: `${domain}${endPoint}${params}`,
    method: "POST",
    body: body,
    params: params,
  });
};

export const AxiosPut = (endPoint, body = {}, params = "") => {
  return request({
    url: `${domain}${endPoint}${params}`,
    method: "PUT",
    body: body,
    params: params,
  });
};

export const AxiosDelete = (endPoint, params = "") => {
  return request({
    url: `${domain}${endPoint}${params}`,
    method: "DELETE",
    params: params,
  });
};
