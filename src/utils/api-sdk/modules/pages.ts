import { apiPrefix, storageDataPrefix } from "../../../config/constant";
import { timeout } from "../options";
import { httpFetch } from "../request";
export default {
    create(page: any) {
        const accessToken = localStorage.getItem(storageDataPrefix.accessToken) as string;
        const target_url = `${apiPrefix.baseUrl}/pages`;

        const requestObj = httpFetch(target_url, {
            method: "post",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
                Authorization: `Bearer ${accessToken}`,
            },

            body: { ...page }
        }) as any;
        requestObj.promise = requestObj.promise.then(({ body, statusCode }: any) => {

            return statusCode == 200
                ? Promise.resolve(body)
                : Promise.reject({
                    statusCode: statusCode,
                    message: body.message,
                });
        }).catch((err: any) => {
            Promise.reject({
                statusCode: err.statusCode,
                message: err.message,
            });
        });
        return requestObj;
    },
    update(page: any, pageId: number) {
        const accessToken = localStorage.getItem(storageDataPrefix.accessToken) as string;

        const target_url = `${apiPrefix.baseUrl}/pages/${pageId}`;
        const requestObj = httpFetch(target_url, {
            method: "put",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
                Authorization: `Bearer ${accessToken}`,
            },
            body: { ...page },
        }) as any;
        requestObj.promise = requestObj.promise
            .then(({ body, statusCode }: any) => {
                return Promise.resolve(body);
            })
            .catch((err: any) => {
                console.log("erro update page", err);
                Promise.reject({
                    statusCode: err.statusCode,
                    message: err.message,
                });
            });
        return requestObj;
    },
};
