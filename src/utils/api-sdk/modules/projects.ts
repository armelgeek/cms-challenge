import { apiPrefix, storageDataPrefix } from "../../../config/constant";
import { timeout } from "../options";
import { httpFetch } from "../request";
export default {
  create(name: string, description: string) {
    const accessToken = localStorage.getItem(storageDataPrefix.accessToken) as string;
    const target_url = `${apiPrefix.baseUrl}/projects`;

    const requestObj = httpFetch(target_url, {
      method: "post",
      timeout,
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
        Authorization: `Bearer ${accessToken}`,
     },
      
      body: {name, description}
    }) as any;
    requestObj.promise = requestObj.promise.then(({ body, statusCode }:any) => {

      return statusCode == 200
        ? Promise.resolve(body)
        : Promise.reject({
            statusCode: statusCode,
            message: body.message,
          });
    }).catch((err:any) => {
      Promise.reject({
        statusCode: err.statusCode,
        message: err.message,
      });
    });
    return requestObj;
  },
  fetch() {
    const target_url = `${apiPrefix.baseUrl}/projects`;
    const accessToken = localStorage.getItem(storageDataPrefix.accessToken) as string;
    
    const requestObj = httpFetch(target_url, {
      method: "get",
      timeout,
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
        Authorization: `Bearer ${accessToken}`,
      },
    }) as any;
    requestObj.promise = requestObj.promise.then(({ body }) => {
      return Promise.resolve(body);
    }).catch((err:any) => {
      Promise.reject({
        statusCode: err.statusCode,
        message: err.message,
      });
    });
    return requestObj;
  },
  get(projectId:number) {
    const target_url = `${apiPrefix.baseUrl}/projects/${projectId}`;
    const accessToken = localStorage.getItem(storageDataPrefix.accessToken) as string;
    
    const requestObj = httpFetch(target_url, {
      method: "get",
      timeout,
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
        Authorization: `Bearer ${accessToken}`,
      },
    }) as any;
    requestObj.promise = requestObj.promise.then(({ body }) => {
      return Promise.resolve(body);
    }).catch((err:any) => {
      Promise.reject({
        statusCode: err.statusCode,
        message: err.message,
      });
    });
    return requestObj;
  },
};
