import { requestMsg } from "./message";
import { deflateRaw } from "pako";
import {apiPrefix} from "../../config/constant";
const defaultHeaders = {
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
};
/**
 * @param {*} url
 * @param {*} options
 */
export const httpFetch = (url:string, options: any = { method: "get" }) => {
    const requestObj = fetchData(url, options);
    return {
        promise: requestObj.request.catch((err) => {
            switch (err.message) {
                case "socket hang up":
                    return Promise.reject(new Error(requestMsg.unachievable));
                case "Aborted":
                    return Promise.reject(new Error(requestMsg.timeout));
                case "Network request failed":
                    return Promise.reject(new Error(requestMsg.notConnectNetwork));
                default:
                    return Promise.reject(err);
            }
        }),
        cancelHttp() {

        },
    };
};

/**
 * @param {*} url
 * @param {*} options
 * @param {*} callback
 */
export const httpGet = (url:string, options:any, callback:any):void => {
    if (typeof options === "function") {
        callback = options;
        options = {};
    }
    const requestObj = fetchData(url, { ...options, method: "get" });
    requestObj.request
        .then((resp) => {
            callback(null, resp, resp.body);
        })
        .catch((err) => {
            callback(err, null, null);
        });
};

const handleDeflateRaw = (data:any) =>
    new Promise((resolve, reject) => {
        resolve(Buffer.from(deflateRaw(data)));
    });


const handleRequestData = async (
    url:any,
    {
        method = "get",
        headers = {} as any,
        format = "json",
        cache = "no-store",
        mode= 'no-cors',
        ...options
    }
) => {
    headers = Object.assign(
        {
            Accept: "application/json",
        },
        headers
    );
    options.cache = cache;
    if (method.toLocaleLowerCase() === "post" && !headers["Content-Type"]) {
        if (options.form) {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
            const formBody = [];
            for (let [key, value] of Object.entries(options.form)) {
                let encodedKey = encodeURIComponent(key);
                let encodedValue = encodeURIComponent(value  as any);
                formBody.push(`${encodedKey}=${encodedValue}`);
            }
            options.body = formBody.join("&");
            delete options.form;
        } else if (options.formData) {
            headers["Content-Type"] = "multipart/form-data";
            const formBody = [];
            for (let [key, value] of Object.entries(options.form)) {
                let encodedKey = encodeURIComponent(key);
                let encodedValue = encodeURIComponent(value  as any);
                formBody.push(`${encodedKey}=${encodedValue}`);
            }

            options.body = options.formData;
            delete options.formData;
        } else {
            headers["Content-Type"] = "application/json";
        }
    }
    if (headers["Content-Type"] === "application/json" && options.body) {
        options.body = JSON.stringify(options.body);
    }

    return {
        ...options,
        method,
        headers: Object.assign({}, defaultHeaders, headers),
    };
};


const fetchData = (url:string, { timeout = 15000, ...options }) => {
    console.log("---start---", url);
    return {
        request: handleRequestData(url, options).then((options) => {

            return fetch(url, {
                    ...options
                })
                .then((resp) =>
                    (resp.text()).then((text) => {
                        return {
                            body: text,
                            statusCode: resp.status,
                            url: resp.url,
                            ok: resp.ok,
                        };
                    })
                )
                .then((resp) => {
                        try {
                            resp.body = JSON.parse(resp.body);
                        } catch {}

                        return resp;
                })
        }),
    };
};