import axios from "axios";

//对axios的配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

/**
 * @param {*} url
 * 使用get
 */
export const baseGet = (url, config= {}) => {
    config.method = "get";
    config.url = url;
    return base(config);
};

/**
 * @param {*} url
 * @param {*} data
 * 使用post
 */
export const basePost = (url, data, config = {}) => {
    config.method = "post";
    config.url = url;
    config.data = data;
    return base(config);
};

/**
 * @param {*} url
 * @param {*} data
 * 使用put
 */
export const basePut = (url, data, config = {}) => {
    config.method = "put";
    config.url = url;
    config.data = data;
    return base(config);
};

/**
 * @param {*} url
 * 使用delete
 */
export const baseDelete = (url, config = {}) => {
    config.method = "delete";
    config.url = url;
    return base(config);
};

/**
 * 请求基础配置
 */
export const base = (config = {}) => {
    if (!config.url) return;

    //取消请求
    const CancelToken = axios.CancelToken;
    let cancel;
    config.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
    });

    //返回结果
    let res = axios.request(config).catch((error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        }
        error.message && (error.msg = error.message);
        return Promise.reject(error);
    });

    res.cancel = cancel;

    return res;
}

export default axios
