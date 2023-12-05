import { apiPrefix } from "../../config/constant";
import { timeout } from "./options";
import { httpFetch } from "./request";


export default {
    iconFinder(search: string, limit: number = 100) {
        const target_url = 'https://api.iconify.design/search?query=' + search + '&limit=' + limit;
        const requestObj = httpFetch(target_url, {
            method: "get",
            timeout,
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
            },
        }) as any;
        requestObj.promise = requestObj.promise.then(({ body, statusCode }: any) => {
            return body;
        }).catch((err: any) => {
            return err;
        });
        return requestObj;
    }
};
