import { apiPrefix } from "../../config/constant";
import { timeout } from "./options";
import { httpFetch } from "./request";
export default {
    loginAuth(email: string, password: string) {
        const target_url = `${apiPrefix.baseUrl}/api/login`;
        const requestObj = httpFetch(target_url, {
            method: "post",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
            },
            body: {email, password}
        }) as any;
        requestObj.promise = requestObj.promise.then(({ body, statusCode }:any) => {
            return statusCode == 200
                ? Promise.resolve({
                    accessToken: body.accessToken,
                    refreshToken: body.refreshToken,
                    isVerified: body.isVerified,
                })
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
    refreshTokenAuth(token: any) {
        const target_url = `${apiPrefix.baseUrl}/api/refresh-token`;
        const requestObj = httpFetch(target_url, {
            method: "post",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
            },
            body: {
                refreshToken: token,
            },
        }) as any;
        requestObj.promise = requestObj.promise
            .then(({ body, statusCode }:any) => {
                const { token } = body;
                return { accessToken: token };
            })
            .catch((err:any) => {
                Promise.reject({
                    statusCode: err.statusCode,
                    message: err.message,
                });
            });
        return requestObj;
    },
    meInfo(formData: any, token: string) {
        const target_url = `${apiPrefix.baseUrl}/api/me`;
        const requestObj = httpFetch(target_url, {
            method: "put",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
                Authorization: `Bearer ${token}`,
            },
            body: {
                email: formData.email,
                name: formData.name,
            },
        }) as any;
        requestObj.promise = requestObj.promise
            .then(({ body, statusCode }:any) => {
                const { message, token } = body;
                return Promise.resolve({
                    message,
                    token,
                });
            })
            .catch((err:any) => {
                Promise.reject({
                    statusCode: err.statusCode,
                    message: err.message,
                });
            });
        return requestObj;
    },
    getMeInfo(token: string) {
        const target_url = `${apiPrefix.baseUrl}/api/me`;
        //console.log('get user',token);
        const requestObj = httpFetch(target_url, {
            method: "get",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
                Authorization: `Bearer ${token}`,
            },
        }) as any;
        requestObj.promise = requestObj.promise.then(({ body, statusCode }:any) => {
            return Promise.resolve(body);
        }).catch((err:any) => {
            return Promise.reject({
                statusCode: err.statusCode,
                message: err.message,
            });
        });
        return requestObj;
    },
    registerUser(
        username: string,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        const target_url = `${apiPrefix.baseUrl}/api/register`;
        const requestObj = httpFetch(target_url, {
            method: "post",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
            },
            body: { username, email, password, confirmPassword },
        }) as any;
        requestObj.promise = requestObj.promise
            .then(({ body, statusCode }:any) => {
                return Promise.resolve(body);
            })
            .catch((err:any) => Promise.reject(new Error(err.message)));
        return requestObj;
    }
};
